import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

interface ValoresCamposAdicionar {
  [key: string]: string;  
}

interface ApiResult<T> {
  dados: T[];
  carregando: boolean;
  erro: string;
  paginaAtual: number;
  totalPaginas: number;
  paginar: (numeroPagina: number) => void;
  excluirItem: (itemId: number) => Promise<void>;
  valoresCamposAdicionar: ValoresCamposAdicionar;
  adicionarCampo: (nomeCampo: string) => void;
  atualizarValorCampo: (nomeCampo: string, valorCampo: string) => void;
  AdicionarForm: () => Promise<void>;
  exibindoMensagemEditar: boolean;
  editarItem: (item: T) => void;
  itemEditando: T | null;
  salvarItemEditado: () => Promise<void>;
  cancelarEdicao: () => void;
  lidarComMudancaFormularioEditar: (evento: React.ChangeEvent<HTMLInputElement>) => void;
  termoPesquisa: string;
  lidarComPesquisa: (evento: React.ChangeEvent<HTMLInputElement>) => void;
  mensagemAdicionar: string;
  erroAdicionar: string;
  mensagemExcluir: string;
  erroExcluir: string;
  mensagemEditar: string;
  erroEditar: string;
  pesquisarItens: (termo: string) => Promise<void>;
  carregarListaManualmente: () => void;
  listaVisivel: boolean;
  mensagemDeletarSucesso: string;
  detalhesItem: T | null;
  erroDetalhesItem: string;
  buscarId: (itemId: number) => Promise<void>;
}

const useApi = <T extends { id: number }>(
  url: string,  
  itensPorPagina: number = 0
): ApiResult<T> => {
  const [dados, setDados] = useState<T[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true);
  const [erro, setErro] = useState<string>('');
  const [paginaAtual, setPaginaAtual] = useState<number>(1);
  const [totalPaginas, setTotalPaginas] = useState<number>(0);
  const [mensagemExcluir, setMensagemExcluir] = useState<string>('');
  const [erroExcluir, setErroExcluir] = useState<string>('');
  const [mensagemAdicionar, setMensagemAdicionar] = useState<string>('');
  const [erroAdicionar, setErroAdicionar] = useState<string>('');
  const [valoresCamposAdicionar, setValoresCamposAdicionar] = useState<ValoresCamposAdicionar>({});
  const [mensagemEditar, setMensagemEditar] = useState<string>('');
  const [erroEditar, setErroEditar] = useState<string>('');
  const [termoPesquisa, setTermoPesquisa] = useState<string>('');
  const [listaVisivel, setListaVisivel] = useState<boolean>(false);
  const [mensagemDeletarSucesso, setMensagemDeletarSucesso] = useState<string>('');
  const [itemEditando, setItemEditando] = useState<T | null>(null);
  const [exibindoMensagemEditar, setExibindoMensagemEditar] = useState<boolean>(false);
  const [detalhesItem, setDetalhesItem] = useState<T | null>(null);
  const [erroDetalhesItem, setErroDetalhesItem] = useState<string>('');

  const buscarDados = async (): Promise<void> => {
    try {
      setCarregando(true);
      const resposta: AxiosResponse<T[]> = await axios.get(url);

      if (itensPorPagina > 0) {
        const totalItens = resposta.data.length;
        const totalPaginas = Math.ceil(totalItens / itensPorPagina);
        setTotalPaginas(totalPaginas);
        const indiceInicio = (paginaAtual - 1) * itensPorPagina;
        const indiceFim = indiceInicio + itensPorPagina;
        const dadosFatiados = resposta.data.slice(indiceInicio, indiceFim);
        setDados(dadosFatiados);
      } else {
        setDados(resposta.data);
        setTotalPaginas(1);
      }

      setCarregando(false);
    } catch (erro) {
      setErro('Ocorreu um erro ao buscar os dados da API.');
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarDados();
  }, [url, itensPorPagina, paginaAtual]);

  const paginar = (numeroPagina: number): void => {
    if (numeroPagina >= 1 && numeroPagina <= totalPaginas) {
      setPaginaAtual(numeroPagina);
    }
  };

  const buscarId = async (itemId: number): Promise<void> => {
    try {
      setCarregando(true);
      const resposta: AxiosResponse<T> = await axios.get(`${url}/${itemId}`);
      setDetalhesItem(resposta.data);
      setCarregando(false);
    } catch (erro) {
      setErroDetalhesItem('Ocorreu um erro ao buscar os detalhes do item.');
      setCarregando(false);
    }
  };

  const excluirItem = async (itemId: number): Promise<void> => {
    const confirmado = window.confirm('Tem certeza de que deseja excluir este item?');
    if (!confirmado) return;

    try {
      await axios.delete(`${url}/${itemId}`);
      const dadosAtualizados = dados.filter((item) => item.id !== itemId);
      setDados(dadosAtualizados);
      setMensagemExcluir('Item excluído com sucesso.');
      setErroExcluir('');

      setTimeout(() => {
        setMensagemExcluir('');
      }, 6000);
    } catch (erro) {
      setErro('Ocorreu um erro ao excluir o item da API.');
      setMensagemExcluir('');
      setErroExcluir('Falha ao excluir.');
    }
  };

  const adicionarCampo = (nomeCampo: string): void => {
    setValoresCamposAdicionar((valoresAnteriores) => ({
      ...valoresAnteriores,
      [nomeCampo]: '',
    }));
  };

  const atualizarValorCampo = (nomeCampo: string, valorCampo: string): void => {
    setValoresCamposAdicionar((valoresAnteriores) => ({
      ...valoresAnteriores,
      [nomeCampo]: valorCampo,
    }));
  };

  const AdicionarForm = async (): Promise<void> => {
    const novoItem = { ...valoresCamposAdicionar };
    try {
      await axios.post(url, novoItem);
      setValoresCamposAdicionar({});
      setMensagemAdicionar('Item adicionado com sucesso.');

      setTimeout(() => {
        setMensagemAdicionar('');
      }, 3000);
    } catch (erro) {
      setErroAdicionar('Falha ao adicionar o item à API.');
    }
  };

  const editarItem = (item: T): void => {
    setItemEditando(item);
  };

  const exibirMensagemEditar = (): void => {
    setExibindoMensagemEditar(true);

    setTimeout(() => {
      setExibindoMensagemEditar(false);
    }, 3000);
  };

  const salvarItemEditado = async (): Promise<void> => {
    try {
      await axios.put(`${url}/${itemEditando!.id}`, itemEditando);
      exibirMensagemEditar();
    } catch (erro) {
      setErro('Ocorreu um erro ao editar o item da API.');
      setMensagemEditar('');
      setErroEditar('Falha ao editar.');
    }
    setItemEditando(null);
  };

  const cancelarEdicao = (): void => {
    setItemEditando(null);
  };

  const lidarComMudancaFormularioEditar = (evento: React.ChangeEvent<HTMLInputElement>): void => {
    setItemEditando((itemEditando) => ({
      ...itemEditando!,
      [evento.target.name]: evento.target.value,
    }));
  };

  const lidarComPesquisa = (evento: React.ChangeEvent<HTMLInputElement>): void => {
    setTermoPesquisa(evento.target.value);
  };

  const pesquisarItens = async (termo: string): Promise<void> => {
    try {
      setCarregando(true);
      const resposta: AxiosResponse<T[]> = await axios.get(url, {
        params: {
          q: termo,
        },
      });

      if (itensPorPagina > 0) {
        const totalItens = resposta.data.length;
        const totalPaginas = Math.ceil(totalItens / itensPorPagina);
        setTotalPaginas(totalPaginas);
        const indiceInicio = (paginaAtual - 1) * itensPorPagina;
        const indiceFim = indiceInicio + itensPorPagina;
        const dadosFatiados = resposta.data.slice(indiceInicio, indiceFim);
        setDados(dadosFatiados);
      } else {
        setDados(resposta.data);
        setTotalPaginas(1);
      }

      setCarregando(false);
    } catch (erro) {
      setErro('Ocorreu um erro ao buscar os dados da API.');
      setCarregando(false);
    }
  };

  const carregarListaManualmente = (): void => {
    buscarDados();
    setListaVisivel((prevState) => !prevState);
  };

  return {
    dados,
    carregando,
    erro,
    paginaAtual,
    totalPaginas,
    paginar,
    excluirItem,
    valoresCamposAdicionar,
    adicionarCampo,
    atualizarValorCampo,
    AdicionarForm,
    exibindoMensagemEditar,
    editarItem,
    itemEditando,
    salvarItemEditado,
    cancelarEdicao,
    lidarComMudancaFormularioEditar,
    termoPesquisa,
    lidarComPesquisa,
    mensagemAdicionar,
    erroAdicionar,
    mensagemExcluir,
    erroExcluir,
    mensagemEditar,
    erroEditar,
    pesquisarItens,
    carregarListaManualmente,
    listaVisivel,
    mensagemDeletarSucesso,
    detalhesItem,
    erroDetalhesItem,
    buscarId,
  };
};

export default useApi;
