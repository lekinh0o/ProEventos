using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence.contracts
{
    public interface IPalestrantePersist
    {

        // PALESTRANTE
        Task<Palestrante[]> GetAllPalestrantesByNomeAsync(string nome, bool includeEventos);
        Task<Palestrante[]> GetAllPalestrantesAsync( bool includeEventos );
        Task<Palestrante> GetAllPalestranteByIdAsync(int palestranteId, bool includeEventos);

    }
}