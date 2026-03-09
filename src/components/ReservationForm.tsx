import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Clock, Mail, Phone, User, Info } from 'lucide-react';
import { Reservation } from '../types';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '2 personas',
    date: '',
    time: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReservation: Reservation = {
      id: Math.random().toString(36).substr(2, 9),
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      guests: parseInt(formData.guests),
      date: formData.date,
      time: formData.time,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    const existing = JSON.parse(localStorage.getItem('laurel_reservations') || '[]');
    localStorage.setItem('laurel_reservations', JSON.stringify([...existing, newReservation]));
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', phone: '', email: '', guests: '2 personas', date: '', time: '' });
  };

  const times = ['13:30', '14:00', '14:30', '20:30', '21:00', '21:30'];

  return (
    <div className="w-full bg-white rounded-2xl shadow-2xl border border-primary/10 overflow-hidden">
      <div className="p-6 md:p-10">
        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-10"
          >
            <div className="size-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar size={40} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Reserva Solicitada!</h3>
            <p className="text-slate-600">Hemos recibido tu solicitud. Te enviaremos una confirmación pronto.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Nombre Completo</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                  placeholder="Ej. Ana García" 
                  type="text" 
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Teléfono</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  required
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                  placeholder="+34 600 000 000" 
                  type="tel" 
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-semibold text-slate-700">Correo Electrónico</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                  placeholder="ana@ejemplo.com" 
                  type="email" 
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Número de Personas</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <select 
                  value={formData.guests}
                  onChange={e => setFormData({...formData, guests: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none"
                >
                  <option>2 personas</option>
                  <option>3 personas</option>
                  <option>4 personas</option>
                  <option>5+ personas</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Fecha</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  required
                  value={formData.date}
                  onChange={e => setFormData({...formData, date: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                  type="date" 
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-semibold text-slate-700">Hora</label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {times.map(t => (
                  <button 
                    key={t}
                    type="button"
                    onClick={() => setFormData({...formData, time: t})}
                    className={`py-2 border rounded-lg text-sm transition-all ${
                      formData.time === t 
                      ? 'bg-primary text-white border-primary' 
                      : 'border-primary/30 text-slate-700 hover:bg-primary/10'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 mt-4">
              <button 
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:brightness-105 active:scale-[0.98] transition-all"
              >
                Confirmar Reserva
              </button>
            </div>
          </form>
        )}
      </div>
      <div className="bg-primary/5 p-6 border-t border-primary/10">
        <div className="flex items-start gap-3">
          <Info className="text-primary shrink-0" size={20} />
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-bold text-slate-800">Política de Cancelación</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Entendemos que los planes pueden cambiar. Puedes cancelar o modificar tu reserva sin cargo hasta 2 horas antes de la cita. Para grupos grandes, agradecemos un aviso de 24 horas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
