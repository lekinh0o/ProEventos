using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence.contracts
{
    public interface IEventoPersist
    {
        
      // Eventos 
      Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includePalestrantes);
      Task<Evento[]> GetAllEventosAsync( bool includePalestrantes );
      Task<Evento> GetEventoByIdAsync(int  eventoId, bool includePalestrantes);

       
    }
}