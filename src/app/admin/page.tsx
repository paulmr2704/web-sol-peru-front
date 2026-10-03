'use client';

import { useState, useEffect } from 'react';

const initialSolicitudes = [
  { id: 'sol-001', cliente: 'Juan Pérez Silva', dni: '74839201', correo: 'juan.perez@gmail.com', monto: 15000, plazo: 12, riesgo: 'BAJO', estado: 'APROBADA', fecha: '2026-10-01' },
  { id: 'sol-002', cliente: 'María Gomez T.', dni: '45839210', correo: 'maria.gomez@outlook.com', monto: 5000, plazo: 6, riesgo: 'MEDIO', estado: 'EN REVISION', fecha: '2026-10-02' },
  { id: 'sol-003', cliente: 'Carlos Ruiz', dni: '10293847', correo: 'cruiz@empresa.pe', monto: 25000, plazo: 24, riesgo: 'ALTO', estado: 'RECHAZADA', fecha: '2026-10-02' },
  { id: 'sol-004', cliente: 'Ana Torres C.', dni: '47583920', correo: 'ana.torres123@gmail.com', monto: 8000, plazo: 12, riesgo: 'BAJO', estado: 'DESEMBOLSADA', fecha: '2026-09-28' },
];

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [solicitudes, setSolicitudesState] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [selectedSol, setSelectedSol] = useState<any>(null);
  const [toastMessage, setToastMessage] = useState<{text: string, type: string} | null>(null);

  // Formularios temporales
  const [newSol, setNewSol] = useState({ cliente: '', dni: '', correo: '', monto: '', plazo: '' });
  const [editStatus, setEditStatus] = useState('');
  const [editRiesgo, setEditRiesgo] = useState('');

  // Sincronizar con LocalStorage para la magia de la demo
  useEffect(() => {
    const saved = localStorage.getItem('admin_solicitudes');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.length > 0) {
          setSolicitudesState(parsed);
          return;
        }
      } catch (e) {}
    }
    setSolicitudesState(initialSolicitudes);
    localStorage.setItem('admin_solicitudes', JSON.stringify(initialSolicitudes));
  }, []);

  const setSolicitudes = (newSols: any[]) => {
    setSolicitudesState(newSols);
    localStorage.setItem('admin_solicitudes', JSON.stringify(newSols));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@solperu.com' && password === 'admin123') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Credenciales incorrectas. Intenta con admin@solperu.com / admin123');
    }
  };

  const handleAddSolicitud = (e: React.FormEvent) => {
    e.preventDefault();
    const nueva = {
      id: `sol-00${solicitudes.length + 1}`,
      cliente: newSol.cliente,
      dni: newSol.dni,
      correo: newSol.correo,
      monto: Number(newSol.monto),
      plazo: Number(newSol.plazo),
      riesgo: 'EN EVALUACION',
      estado: 'RECIBIDA',
      fecha: new Date().toISOString().split('T')[0]
    };
    setSolicitudes([nueva, ...solicitudes]);
    setIsNewModalOpen(false);
    setNewSol({ cliente: '', dni: '', correo: '', monto: '', plazo: '' });
    showToast(`Solicitud de ${nueva.cliente} registrada exitosamente.`, 'success');
  };

  const showToast = (text: string, type: 'success' | 'error' | 'info') => {
    setToastMessage({text, type});
    setTimeout(() => setToastMessage(null), 5000);
  };

  const handleOpenRevisar = (sol: any) => {
    setSelectedSol(sol);
    setEditStatus(sol.estado);
    setEditRiesgo(sol.riesgo);
  };

  const handleActualizarEstado = () => {
    const updated = solicitudes.map(s => s.id === selectedSol.id ? { ...s, estado: editStatus, riesgo: editRiesgo } : s);
    setSolicitudes(updated);
    
    if (editStatus === 'APROBADA' && selectedSol.estado !== 'APROBADA') {
      showToast(`✅ Crédito Aprobado. Se notificó a: ${selectedSol.correo}`, 'success');
    } else if (editStatus === 'RECHAZADA' && selectedSol.estado !== 'RECHAZADA') {
      showToast(`❌ Solicitud Rechazada. Se notificó a: ${selectedSol.correo}`, 'error');
    } else if (editStatus === 'DESEMBOLSADA' && selectedSol.estado !== 'DESEMBOLSADA') {
      showToast(`💰 Dinero transferido a la cuenta de ${selectedSol.cliente}`, 'success');
    } else {
      showToast(`🔄 Estado actualizado a ${editStatus}`, 'info');
    }
    setSelectedSol(null);
  };

  const filteredSolicitudes = solicitudes.filter(sol => 
    sol.dni.includes(searchTerm) || sol.cliente.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-solCream-50 flex items-center justify-center p-4 font-sans">
        <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full border border-solCream-200">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black tracking-tight text-solNavy-900 font-serif">
              SolPerú<span className="text-solGold-500">Admin</span>
            </h1>
            <p className="text-solNavy-700 mt-2 text-sm font-medium">Acceso seguro al panel de control.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-solNavy-800 mb-2">Correo Electrónico</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 border-2 border-solCream-300 rounded-xl focus:ring-4 focus:ring-solGold-300 outline-none text-solNavy-900 font-medium" placeholder="admin@solperu.com" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-solNavy-800 mb-2">Contraseña</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 border-2 border-solCream-300 rounded-xl focus:ring-4 focus:ring-solGold-300 outline-none text-solNavy-900 font-medium" placeholder="••••••••" required />
            </div>
            {error && <p className="text-red-500 text-sm font-bold bg-red-50 p-3 rounded-lg border border-red-100">{error}</p>}
            <button type="submit" className="w-full bg-solNavy-900 hover:bg-solNavy-800 text-white font-bold py-4 rounded-xl mt-6 shadow-xl flex justify-center items-center">
              Ingresar al Sistema
            </button>
          </form>
        </div>
      </div>
    );
  }

  const getStatusColor = (estado: string) => {
    switch (estado) {
      case 'APROBADA': return 'bg-solGreen-100 text-solGreen-800 border-solGreen-600';
      case 'EN REVISION': return 'bg-solGold-100 text-solGold-600 border-solGold-500';
      case 'RECIBIDA': return 'bg-solGold-100 text-solGold-600 border-solGold-400';
      case 'RECHAZADA': return 'bg-red-100 text-red-800 border-red-200';
      case 'DESEMBOLSADA': return 'bg-solNavy-100 text-solNavy-800 border-solNavy-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRiskColor = (riesgo: string) => {
    switch (riesgo) {
      case 'BAJO': return 'text-solGreen-700 bg-solGreen-100 px-3 py-1.5 rounded-lg text-xs font-bold border border-solGreen-600/20';
      case 'MEDIO': return 'text-solGold-600 bg-solGold-100 px-3 py-1.5 rounded-lg text-xs font-bold border border-solGold-500/20';
      case 'ALTO': return 'text-red-700 bg-red-100 px-3 py-1.5 rounded-lg text-xs font-bold border border-red-600/20';
      case 'EN EVALUACION': return 'text-gray-700 bg-gray-200 px-3 py-1.5 rounded-lg text-xs font-bold';
      default: return 'text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg text-xs font-bold';
    }
  };

  return (
    <div className="min-h-screen bg-solCream-50 flex font-sans relative overflow-hidden">
      
      {/* ALERTA TIPO TOAST */}
      {toastMessage && (
        <div className={`absolute top-10 right-10 text-white px-6 py-4 rounded-xl shadow-2xl border-l-4 z-[100] animate-bounce ${
          toastMessage.type === 'error' ? 'bg-red-600 border-red-900' : 
          toastMessage.type === 'success' ? 'bg-solGreen-700 border-solGreen-900' : 'bg-solNavy-900 border-solGold-500'
        }`}>
          <p className="font-bold text-sm flex items-center space-x-2">
            <span>{toastMessage.text}</span>
          </p>
        </div>
      )}

      {/* MODAL NUEVA SOLICITUD */}
      {isNewModalOpen && (
        <div className="fixed inset-0 bg-solNavy-950/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl">
            <h2 className="text-2xl font-black text-solNavy-900 mb-6 font-serif">Nueva Solicitud Manual</h2>
            <form onSubmit={handleAddSolicitud} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-solNavy-800 mb-1">Nombre Completo</label>
                <input required type="text" value={newSol.cliente} onChange={e=>setNewSol({...newSol, cliente: e.target.value})} className="w-full p-3 border-2 border-solCream-200 rounded-xl outline-none focus:border-solGold-500" />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-solNavy-800 mb-1">DNI</label>
                  <input required type="text" value={newSol.dni} onChange={e=>setNewSol({...newSol, dni: e.target.value})} className="w-full p-3 border-2 border-solCream-200 rounded-xl outline-none focus:border-solGold-500" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-solNavy-800 mb-1">Correo Electrónico</label>
                  <input required type="email" value={newSol.correo} onChange={e=>setNewSol({...newSol, correo: e.target.value})} className="w-full p-3 border-2 border-solCream-200 rounded-xl outline-none focus:border-solGold-500" placeholder="ejemplo@correo.com" />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-solNavy-800 mb-1">Monto (S/)</label>
                  <input required min="1" type="number" value={newSol.monto} onChange={e=>setNewSol({...newSol, monto: e.target.value})} className="w-full p-3 border-2 border-solCream-200 rounded-xl outline-none focus:border-solGold-500" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-solNavy-800 mb-1">Plazo (meses)</label>
                  <input required min="1" type="number" value={newSol.plazo} onChange={e=>setNewSol({...newSol, plazo: e.target.value})} className="w-full p-3 border-2 border-solCream-200 rounded-xl outline-none focus:border-solGold-500" />
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={()=>setIsNewModalOpen(false)} className="px-5 py-2.5 rounded-xl font-bold text-solNavy-600 bg-solCream-100 hover:bg-solCream-200">Cancelar</button>
                <button type="submit" className="px-5 py-2.5 rounded-xl font-bold text-solNavy-950 bg-solGold-500 hover:bg-solGold-400">Crear Solicitud</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL REVISAR Y CAMBIAR ESTADO */}
      {selectedSol && (
        <div className="fixed inset-0 bg-solNavy-950/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-black text-solNavy-900">{selectedSol.cliente}</h2>
                <p className="text-solNavy-600 font-medium text-sm mt-1">DNI: {selectedSol.dni} | ✉️ {selectedSol.correo}</p>
              </div>
              <div className="bg-solNavy-50 p-2 rounded-lg text-center border border-solNavy-100">
                <p className="text-[10px] text-solNavy-500 font-bold uppercase tracking-widest">Monto</p>
                <p className="font-black text-solNavy-900">S/ {selectedSol.monto.toLocaleString()}</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="bg-solCream-50 p-4 rounded-xl border border-solCream-200">
                <label className="block text-xs font-bold text-solNavy-600 uppercase tracking-widest mb-2">Evaluación de Riesgo Manual</label>
                <select 
                  value={editRiesgo} 
                  onChange={(e) => setEditRiesgo(e.target.value)}
                  className="w-full p-3 border-2 border-solCream-200 rounded-xl outline-none focus:border-solGold-500 font-bold text-solNavy-900 bg-white"
                >
                  <option value="EN EVALUACION">EN EVALUACION</option>
                  <option value="BAJO">BAJO RIESGO (Recomendado aprobar)</option>
                  <option value="MEDIO">MEDIO RIESGO (Requiere garantías)</option>
                  <option value="ALTO">ALTO RIESGO (Rechazo inminente)</option>
                </select>
              </div>

              <div className="bg-solNavy-50 p-4 rounded-xl border border-solNavy-100">
                <label className="block text-xs font-bold text-solNavy-600 uppercase tracking-widest mb-2">Cambiar Estado de Solicitud</label>
                <select 
                  value={editStatus} 
                  onChange={(e) => setEditStatus(e.target.value)}
                  className="w-full p-3 border-2 border-solNavy-200 rounded-xl outline-none focus:border-solGold-500 font-black text-solNavy-900 bg-white"
                >
                  <option value="RECIBIDA">RECIBIDA (Recién ingresada)</option>
                  <option value="EN REVISION">EN REVISIÓN (Analizando perfil)</option>
                  <option value="APROBADA">APROBADA (Cumple requisitos)</option>
                  <option value="RECHAZADA">RECHAZADA (No califica)</option>
                  <option value="DESEMBOLSADA">DESEMBOLSADA (Dinero entregado)</option>
                </select>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button onClick={()=>setSelectedSol(null)} className="flex-1 py-3 bg-solCream-100 text-solNavy-700 font-bold rounded-xl hover:bg-solCream-200 transition-colors">
                Cancelar
              </button>
              <button onClick={handleActualizarEstado} className="flex-1 py-3 bg-solGold-500 text-solNavy-950 font-bold rounded-xl hover:bg-solGold-400 transition-colors shadow-lg shadow-solGold-500/30">
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      )}

      <aside className="w-72 bg-solNavy-950 text-white flex flex-col shadow-2xl z-10">
        <div className="p-8 text-3xl font-black tracking-tight font-serif border-b border-solNavy-800">
          SolPerú<span className="text-solGold-500">Admin</span>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-8">
          <a href="#" className="flex items-center space-x-3 bg-solGold-500 text-solNavy-950 px-5 py-4 rounded-xl transition-all font-bold shadow-lg shadow-solGold-500/20">
            <span>Panel Principal</span>
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-10 overflow-y-auto text-solNavy-900">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-black font-serif text-solNavy-900">Solicitudes de Crédito</h1>
            <p className="text-solNavy-700 mt-2 text-lg font-medium">Gestión y aprobación de financiamientos.</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => {
                // Truco para recargar desde LocalStorage durante la demo si el cliente acaba de mandar un form
                const saved = localStorage.getItem('admin_solicitudes');
                if (saved) setSolicitudesState(JSON.parse(saved));
                showToast('Datos actualizados desde la web', 'info');
              }}
              className="bg-solNavy-100 text-solNavy-900 px-6 py-3 rounded-xl font-bold hover:bg-solNavy-200 transition-all flex items-center space-x-2"
            >
              <span>🔄 Actualizar Tabla</span>
            </button>
            <button onClick={()=>setIsNewModalOpen(true)} className="bg-solGold-500 text-solNavy-950 px-6 py-3 rounded-xl font-bold shadow-lg shadow-solGold-500/20 hover:bg-solGold-400 transition-all flex items-center space-x-2">
              <span>+ Nueva Solicitud Manual</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-solNavy-900/5 border border-solCream-200 overflow-hidden">
          <div className="p-8 border-b border-solCream-200 flex justify-between items-center bg-solCream-50/50">
            <h2 className="text-xl font-black text-solNavy-900 font-serif">Solicitudes Recientes</h2>
            <div className="relative">
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por DNI o Nombre..." 
                className="pl-12 pr-4 py-3 border-2 border-solCream-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-solGold-300 focus:border-solGold-500 w-72 bg-white font-medium" 
              />
              <span className="absolute left-4 top-3.5 text-solNavy-400">🔍</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-solNavy-950 text-solGold-400 text-xs uppercase tracking-widest font-bold">
                  <th className="px-8 py-5">Cliente</th>
                  <th className="px-8 py-5 text-right">Monto Solicitado</th>
                  <th className="px-8 py-5 text-center">Score Riesgo</th>
                  <th className="px-8 py-5 text-center">Estado</th>
                  <th className="px-8 py-5 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-solCream-200">
                {filteredSolicitudes.length > 0 ? filteredSolicitudes.map((sol) => (
                  <tr key={sol.id} className="hover:bg-solCream-100/50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="font-bold text-solNavy-900 text-lg flex items-center gap-2">
                        {sol.cliente}
                        {sol.id.includes('web') && <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded font-bold uppercase">Web</span>}
                      </div>
                      <div className="text-sm font-medium text-solNavy-600 flex items-center space-x-2 mt-1">
                        <span>DNI: {sol.dni}</span>
                        <span className="text-[10px] text-solGreen-700 bg-solGreen-100 px-2 py-0.5 rounded font-bold">✔ KYC OK</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-xl font-black text-solNavy-900 text-right font-serif">
                      S/ {sol.monto.toLocaleString()}
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span className={getRiskColor(sol.riesgo)}>{sol.riesgo}</span>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span className={`px-4 py-2 rounded-xl text-xs font-bold border-2 ${getStatusColor(sol.estado)} tracking-wide`}>
                        {sol.estado}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <button onClick={()=>handleOpenRevisar(sol)} className="bg-solNavy-100 hover:bg-solNavy-200 text-solNavy-900 font-bold px-4 py-2 rounded-lg text-sm transition-colors border border-solNavy-200">Evaluar</button>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-solNavy-500 font-medium">No se encontraron solicitudes con esa búsqueda.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
