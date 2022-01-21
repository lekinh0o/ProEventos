import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Evento } from '@app/models/Evento';
import { EventoService } from '@app/services/evento.service';

@Component({
  selector: 'app-eventos-lista',
  templateUrl: './eventos-lista.component.html',
  styleUrls: ['./eventos-lista.component.scss'],
})
export class EventosListaComponent implements OnInit {
  modalRef?: BsModalRef;

  public eventos: Evento[] = [];
  public eventosFiltrados: Evento[] = [];
  public eventoId: number;

  public widthImg = 150;
  public marginImg = 2;
  public viewImg = false;
  private filtroListado = '';

  public get filtroLista(): string {
    return this.filtroListado;
  }

  public set filtroLista(value: string) {
    this.filtroListado = value;
    this.eventosFiltrados = this.filtroLista
      ? this.filtrarEventos(this.filtroLista)
      : this.eventos;
  }

  public filtrarEventos(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLowerCase();
    return this.eventos.filter(
      (evento: Evento) =>
        evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
        evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.spinner.show();
    this.carregarEventos();
  }

  public alterImg(): void {
    this.viewImg = !this.viewImg;
  }

  public carregarEventos(): void {

    this.eventoService.getEventos().subscribe(
      (evento: Evento[]) => {
        this.eventos = evento;
        this.eventosFiltrados = this.eventos;
      },

      (error: any) => {
        this.spinner.hide();
        this.toastr.error('Erro ao carregar os eventos', 'ERRO!');
      },
      () => this.spinner.hide()
    );
  }

  openModal(event: any, template: TemplateRef<any>, eventoId: number): void {
    event.stopPropagation();
    this.eventoId = eventoId;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.modalRef?.hide();
    this.spinner.show();
    this.eventoService.deleteEvento(this.eventoId).subscribe(
      (result: any) => {
        if (result.messagem === 'deletado') {
          this.toastr.success(
            'O evento foi deletado com sucesso!',
            'DELETADO!'
          );
          this.spinner.hide();
          this.carregarEventos();
        }
      },
      (error: any) => {
        console.error(error);
        this.toastr.error(`Erro ao deletar o Evento ${this.eventoId}`, 'Erro');
        this.spinner.hide();
        this.carregarEventos();
      },
      () => {
        this.spinner.hide();
      }
    );
  }

  decline(): void {
    this.modalRef?.hide();
  }
  detalhesEvento(id: number): void {
    this.router.navigate([`/eventos/detalhes/${id}`]);
  }
}
