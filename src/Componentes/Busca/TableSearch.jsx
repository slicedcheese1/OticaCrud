import React, { useState, useEffect } from 'react';
import './TableSearch.css';
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

let dataTable;
let dataTableIsInitialized = false;

let dataTableOptions = {
    dom: "<'row mb-2 w-100'<'col-sm-12 col-md-6'B>>" + 
    "<'row'<'col-sm-12'tr>>" + 
    "<'row w-100 d-flex justify-content-end'<'d-flex justify-content-end col-sm-12 col-md-7'p>>",
    buttons: [
        {
            extend: "excelHtml5",
            text: "<i class='fa-regular fa-file-excel'></i>",
            titleAttr: "Exportar em Excel",
            className: "btn btn-success",
        },
        {
            extend: "pdfHtml5",
            text: "<i class='fa-solid fa-file-pdf'></i>",
            titleAttr: "Exportar em Pdf",
            className: "btn btn-danger",
        },
        {
            extend: "print",
            text: "<i class='fa-solid fa-print'></i>",
            titleAttr: "Imprimir",
            className: "btn btn-info",
        }
    ],
    pageLength: 15,
    columnDefs: [
        { orderable: false, targets: "_all" },
    ],
    language: {
        "emptyTable": "Nenhum registro encontrado",
        "info": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
        "infoFiltered": "(Filtrados de _MAX_ registros)",
        "infoThousands": ".",
        "loadingRecords": "Carregando...",
        "zeroRecords": "Nenhum registro encontrado",
        "search": "Pesquisar",
        "paginate": {
            "next": "Próximo",
            "previous": "Anterior",
            "first": "Primeiro",
            "last": "Último"
        },
        "aria": {
            "sortAscending": ": Ordenar colunas de forma ascendente",
            "sortDescending": ": Ordenar colunas de forma descendente"
        },
        "select": {
            "rows": {
                "_": "Selecionado %d linhas",
                "1": "Selecionado 1 linha"
            },
            "cells": {
                "1": "1 célula selecionada",
                "_": "%d células selecionadas"
            },
            "columns": {
                "1": "1 coluna selecionada",
                "_": "%d colunas selecionadas"
            }
        },
        "buttons": {
            "copySuccess": {
                "1": "Uma linha copiada com sucesso",
                "_": "%d linhas copiadas com sucesso"
            },
            "collection": "Coleção  <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
            "colvis": "Visibilidade da Coluna",
            "colvisRestore": "Restaurar Visibilidade",
            "copy": "Copiar",
            "copyKeys": "Pressione ctrl ou u2318 + C para copiar os dados da tabela para a área de transferência do sistema. Para cancelar, clique nesta mensagem ou pressione Esc..",
            "copyTitle": "Copiar para a Área de Transferência",
            "csv": "CSV",
            "excel": "Excel",
            "pageLength": {
                "-1": "Mostrar todos os registros",
                "_": "Mostrar %d registros"
            },
            "pdf": "PDF",
            "print": "Imprimir",
            "createState": "Criar estado",
            "removeAllStates": "Remover todos os estados",
            "removeState": "Remover",
            "renameState": "Renomear",
            "savedStates": "Estados salvos",
            "stateRestore": "Estado %d",
            "updateState": "Atualizar"
        },
        "autoFill": {
            "cancel": "Cancelar",
            "fill": "Preencher todas as células com",
            "fillHorizontal": "Preencher células horizontalmente",
            "fillVertical": "Preencher células verticalmente"
        },
        "lengthMenu": "Exibir _MENU_ resultados por página",
        "searchBuilder": {
            "add": "Adicionar Condição",
            "button": {
                "0": "Construtor de Pesquisa",
                "_": "Construtor de Pesquisa (%d)"
            },
            "clearAll": "Limpar Tudo",
            "condition": "Condição",
            "conditions": {
                "date": {
                    "after": "Depois",
                    "before": "Antes",
                    "between": "Entre",
                    "empty": "Vazio",
                    "equals": "Igual",
                    "not": "Não",
                    "notBetween": "Não Entre",
                    "notEmpty": "Não Vazio"
                },
                "number": {
                    "between": "Entre",
                    "empty": "Vazio",
                    "equals": "Igual",
                    "gt": "Maior Que",
                    "gte": "Maior ou Igual a",
                    "lt": "Menor Que",
                    "lte": "Menor ou Igual a",
                    "not": "Não",
                    "notBetween": "Não Entre",
                    "notEmpty": "Não Vazio"
                },
                "string": {
                    "contains": "Contém",
                    "empty": "Vazio",
                    "endsWith": "Termina Com",
                    "equals": "Igual",
                    "not": "Não",
                    "notEmpty": "Não Vazio",
                    "startsWith": "Começa Com",
                    "notContains": "Não contém",
                    "notStartsWith": "Não começa com",
                    "notEndsWith": "Não termina com"
                },
                "array": {
                    "contains": "Contém",
                    "empty": "Vazio",
                    "equals": "Igual à",
                    "not": "Não",
                    "notEmpty": "Não vazio",
                    "without": "Não possui"
                }
            },
            "data": "Data",
            "deleteTitle": "Excluir regra de filtragem",
            "logicAnd": "E",
            "logicOr": "Ou",
            "title": {
                "0": "Construtor de Pesquisa",
                "_": "Construtor de Pesquisa (%d)"
            },
            "value": "Valor",
            "leftTitle": "Critérios Externos",
            "rightTitle": "Critérios Internos"
        },
        "searchPanes": {
            "clearMessage": "Limpar Tudo",
            "collapse": {
                "0": "Painéis de Pesquisa",
                "_": "Painéis de Pesquisa (%d)"
            },
            "count": "{total}",
            "countFiltered": "{shown} ({total})",
            "emptyPanes": "Nenhum Painel de Pesquisa",
            "loadMessage": "Carregando Painéis de Pesquisa...",
            "title": "Filtros Ativos",
            "showMessage": "Mostrar todos",
            "collapseMessage": "Fechar todos"
        },
        "thousands": ".",
        "datetime": {
            "previous": "Anterior",
            "next": "Próximo",
            "hours": "Hora",
            "minutes": "Minuto",
            "seconds": "Segundo",
            "amPm": [
                "am",
                "pm"
            ],
            "unknown": "-",
            "months": {
                "0": "Janeiro",
                "1": "Fevereiro",
                "10": "Novembro",
                "11": "Dezembro",
                "2": "Março",
                "3": "Abril",
                "4": "Maio",
                "5": "Junho",
                "6": "Julho",
                "7": "Agosto",
                "8": "Setembro",
                "9": "Outubro"
            },
            "weekdays": [
                "Dom",
                "Seg",
                "Ter",
                "Qua",
                "Qui",
                "Sex",
                "Sáb"
            ]
        },
        "editor": {
            "close": "Fechar",
            "create": {
                "button": "Novo",
                "submit": "Criar",
                "title": "Criar novo registro"
            },
            "edit": {
                "button": "Editar",
                "submit": "Atualizar",
                "title": "Editar registro"
            },
            "error": {
                "system": "Ocorreu um erro no sistema (<a target=\"\\\" rel=\"nofollow\" href=\"\\\">Mais informações<\/a>)."
            },
            "multi": {
                "noMulti": "Essa entrada pode ser editada individualmente, mas não como parte do grupo",
                "restore": "Desfazer alterações",
                "title": "Multiplos valores",
                "info": "Os itens selecionados contêm valores diferentes para esta entrada. Para editar e definir todos os itens para esta entrada com o mesmo valor, clique ou toque aqui, caso contrário, eles manterão seus valores individuais."
            },
            "remove": {
                "button": "Remover",
                "confirm": {
                    "_": "Tem certeza que quer deletar %d linhas?",
                    "1": "Tem certeza que quer deletar 1 linha?"
                },
                "submit": "Remover",
                "title": "Remover registro"
            }
        },
        "decimal": ",",
        "stateRestore": {
            "creationModal": {
                "button": "Criar",
                "columns": {
                    "search": "Busca de colunas",
                    "visible": "Visibilidade da coluna"
                },
                "name": "Nome:",
                "order": "Ordernar",
                "paging": "Paginação",
                "scroller": "Posição da barra de rolagem",
                "search": "Busca",
                "searchBuilder": "Mecanismo de busca",
                "select": "Selecionar",
                "title": "Criar novo estado",
                "toggleLabel": "Inclui:"
            },
            "emptyStates": "Nenhum estado salvo",
            "removeConfirm": "Confirma remover %s?",
            "removeJoiner": "e",
            "removeSubmit": "Remover",
            "removeTitle": "Remover estado",
            "renameButton": "Renomear",
            "renameLabel": "Novo nome para %s:",
            "renameTitle": "Renomear estado",
            "duplicateError": "Já existe um estado com esse nome!",
            "emptyError": "Não pode ser vazio!",
            "removeError": "Falha ao remover estado!"
        },
        "infoEmpty": "Mostrando 0 até 0 de 0 registro(s)",
        "processing": "Carregando...",
        "searchPlaceholder": "Buscar registros"
    } 
};

const TableSearch = ({ routeSearch, routeDeleteNoId, idLabel, namePage, nameEntity, columnNames, searchPlaceholder }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        loadData(routeSearch);
    }, [routeSearch]);

    useEffect(() => {
        console.log(columnNames);
        if (data.length > 0) {
          if (dataTableIsInitialized) {
            dataTable.clear().draw();
            dataTable.rows.add(data).draw();
          } else {
            dataTable = $('#dataTable').DataTable({
              ...dataTableOptions,
              data: data,
              columns: [
                ...columnNames.map((columnName) => ({
                    title: columnName,
                    data: columnName,
                })),
                { 
                  title: "Ações",
                  data: null,
                  render: function(data, type, row) {
                    return `
                    <div class="">
                      <a href="/Sistema/editar-${nameEntity}/${data[idLabel]}">
                        <button class="btn btn-sm btn-primary"><i class="fa-solid fa-square-pen"></i></button>
                      </a>
                      <button class="btn btn-sm btn-danger btn-delete" data-id="${data.id}"><i class="fa-solid fa-trash-can"></i></button>
                    `;
                  }
                }
              ]
            });
            dataTableIsInitialized = true;
          }
    
          $('#dataTable tbody').on('click', 'button.btn-delete', function () {
            const id = $(this).data('id');
            deleteData(id);
          });
    
          $('#searchInput').on('keyup', function () {
            dataTable.search(this.value).draw();
          })
        }
      }, [data, columnNames, idLabel, nameEntity]);

    const loadData = (routeSearch) => {
        fetch(routeSearch)
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.log("Não foi possível carregar os dados", error);
            });
    };

    const deleteData = (id) => {
        fetch(`${routeDeleteNoId}${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    loadData(routeSearch);
                }
            })
            .catch(error => {
                console.log("Erro ao deletar", error);
            });
    };

    const SearchCard = () => {
        return (
          <Card className='p-4'>
              <h2>Busca de {namePage}</h2>
              <hr />
              <Form.Group>
                <Form.Control 
                    className='input'
                    id="searchInput"
                    placeholder={searchPlaceholder}
                    type="text" 
                />
              </Form.Group>
          </Card>
        );
    };

    return (
        <div className="container">
            <SearchCard />
            <div className="my-5">
                <div>
                    <table id="dataTable" className="table table-stripped" style={{ width: "100%" }}>
                        <caption>Tabela de {namePage}</caption>
                        <thead>
                            <tr>
                                {columnNames.map((columnName, index) => (
                                    <th key={index}>{columnName}</th>
                                ))}
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TableSearch;

