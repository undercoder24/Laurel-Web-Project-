import React, { useState, useEffect } from 'react';
import { Reservation } from '../types';
import { CheckCircle, XCircle, Clock, Trash2 } from 'lucide-react';

export default function AdminDashboard() {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('laurel_reservations');
    if (saved) {
      setReservations(JSON.parse(saved));
    }
  }, []);

  const updateStatus = (id: string, status: Reservation['status']) => {
    const updated = reservations.map(r => r.id === id ? { ...r, status } : r);
    setReservations(updated);
    localStorage.setItem('laurel_reservations', JSON.stringify(updated));
  };

  const deleteReservation = (id: string) => {
    const updated = reservations.filter(r => r.id !== id);
    setReservations(updated);
    localStorage.setItem('laurel_reservations', JSON.stringify(updated));
  };

  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Panel de Administración</h1>
          <p className="text-slate-500">Gestiona las reservas de Laurel Food & Wine</p>
        </div>
        <div className="bg-primary/10 px-4 py-2 rounded-lg border border-primary/20">
          <span className="text-primary font-bold">{reservations.length} Reservas Totales</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="p-4 font-bold text-sm text-slate-600">Cliente</th>
                <th className="p-4 font-bold text-sm text-slate-600">Fecha y Hora</th>
                <th className="p-4 font-bold text-sm text-slate-600">Personas</th>
                <th className="p-4 font-bold text-sm text-slate-600">Estado</th>
                <th className="p-4 font-bold text-sm text-slate-600 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {reservations.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-10 text-center text-slate-400">
                    No hay reservas registradas.
                  </td>
                </tr>
              ) : (
                reservations.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map((res) => (
                  <tr key={res.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-slate-900">{res.name}</div>
                      <div className="text-xs text-slate-500">{res.email}</div>
                      <div className="text-xs text-slate-500">{res.phone}</div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm font-medium">{res.date}</div>
                      <div className="text-xs text-slate-500">{res.time}</div>
                    </td>
                    <td className="p-4 text-sm">{res.guests}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        res.status === 'confirmed' ? 'bg-emerald-100 text-emerald-700' :
                        res.status === 'cancelled' ? 'bg-rose-100 text-rose-700' :
                        'bg-amber-100 text-amber-700'
                      }`}>
                        {res.status === 'confirmed' ? <CheckCircle size={12} /> :
                         res.status === 'cancelled' ? <XCircle size={12} /> :
                         <Clock size={12} />}
                        {res.status === 'confirmed' ? 'Confirmada' :
                         res.status === 'cancelled' ? 'Cancelada' :
                         'Pendiente'}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        {res.status === 'pending' && (
                          <>
                            <button 
                              onClick={() => updateStatus(res.id, 'confirmed')}
                              className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                              title="Confirmar"
                            >
                              <CheckCircle size={18} />
                            </button>
                            <button 
                              onClick={() => updateStatus(res.id, 'cancelled')}
                              className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                              title="Cancelar"
                            >
                              <XCircle size={18} />
                            </button>
                          </>
                        )}
                        <button 
                          onClick={() => deleteReservation(res.id)}
                          className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                          title="Eliminar"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
