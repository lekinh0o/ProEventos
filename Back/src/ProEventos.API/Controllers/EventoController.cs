using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
       
        public IEnumerable <Evento> _evento = new Evento[]
        {

                new Evento(){
                EventoId = 1,
                Tema = "Angular 11 e .NET 5 ",
                Local = "Betim",
                Lote = "1° Lote",
                QtdPessoas = 250,
                DataEvento = DateTime.Now.AddDays(2).ToString("dd/MM/yy"),
                ImagemURL = "foto.png"

            },
            new Evento(){
                EventoId = 2,
                Tema = "Parte 2 Angular 11 e .NET 5 ",
                Local = "são joaquin de bicas",
                Lote = "3° Lote",
                QtdPessoas = 550,
                DataEvento = DateTime.Now.AddDays(5).ToString("dd/MM/yy"),
                ImagemURL = "foto1.jpg"

            }
        };

        public EventoController()
        {  
        }

        [HttpGet]
        public IEnumerable <Evento> Get()
        {
            return _evento; 
        }
        [HttpGet("{id}")]
        public IEnumerable<Evento> GetById(int id)
        {
            return _evento.Where(evento => evento.EventoId == id);
        }

        [HttpPost]
        public string Post()
        {
            return "Exemplo de Post";
        }
        [HttpPut("{id}")]
        public string Put(int id )
        {
            return $"Exemplo de Post: {id}";
        }
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"Exemplo de Delete: {id}";
        }

    }
}
