using System.Threading.Tasks;
using ProEventos.Application.Dtos;

namespace ProEventos.Application.contracts
{
    public interface IEventoService
    {
        Task<EventoDto> AddEventos(EventoDto model);
        Task<EventoDto> UpdateEvento(int eventoId, EventoDto model);
        Task<bool> DeleteEvento(int eventoId);
        // Eventos 
        Task<EventoDto[]> GetAllEventosAsync(bool includePalestrantes = false );
        Task<EventoDto[]> GetAllEventosByTemaAsync(string tema, bool includePalestrantes= false);
        Task<EventoDto> GetEventoByIdAsync(int eventoId, bool includePalestrantes= false);
    }
}