import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { isInt } from 'validator';
import { Link } from 'react-router-dom';
import {
  // FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
} from 'react-icons/fa';

import { Container } from '../../styles/GlobalStyles';
import { VeiculosContainer, /* ImageVeiculo, */ Form } from './styled';
import axios from '../../services/axios';

export default function Cadastro() {
  const [veiculos, setVeiculos] = useState([]);
  const [veiculo, setNomeVeiculo] = useState('');
  const [marca, setMarca] = useState('');
  const [ano, setAno] = useState('');
  const [descricao, setDescricao] = useState('');
  const [vendido, setVendido] = useState(false);
  const [editSelectId, setEditSelectId] = useState(0);
  // const [dateCreate, setDateCreate] = useState('');
  useEffect(() => {
    async function getData() {
      const response = await axios.get('/veiculos');
      setVeiculos(response.data);
    }

    getData();
  }, []);

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  };

  const handleDelete = async (e, id, index) => {
    e.persist();
    try {
      await axios.delete(`/veiculos/${id}`);
      const novosVeiculos = [...veiculos];
      novosVeiculos.splice(index, 1);
      setVeiculos(novosVeiculos);
      setEditSelectId(0);
      window.location.reload();
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      errors.map((error) => console.log(error));
    }
  };

  const handleEdit = async (e, id, index) => {
    e.persist();

    setNomeVeiculo(veiculos[index].veiculo);
    setMarca(veiculos[index].marca);
    setAno(veiculos[index].ano);
    setDescricao(veiculos[index].descricao);
    setVendido(veiculos[index].vendido);
    setEditSelectId(id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;

    if (veiculo.length < 3 || veiculo.length > 255) {
      formErrors = true;
      alert('Nome do veículo precisa ter entre 3 e 255 caracteres.');
    }
    if (marca.length < 3 || marca.length > 255) {
      formErrors = true;
      alert('Marca do veiculo precisa ter entre 3 e 255 caracteres.');
    }
    if (!isInt(String(ano))) {
      formErrors = true;
      alert('Ano precisa ser um número inteiro.');
    }
    if (descricao.length < 3 || descricao.length > 255) {
      formErrors = true;
      alert('A descrição do veiculo precisa ter entre 1 e 255 caracteres.');
    }

    if (formErrors) {
      return;
    }

    try {
      if (editSelectId !== 0) {
        const response = await axios.put(`/veiculos/${editSelectId}`, {
          veiculo,
          marca,
          ano,
          descricao,
          vendido,
        });
        console.log(response);
        alert('Veiculo alterado com sucesso!');
      } else {
        await axios.post(`/veiculos/`, {
          veiculo,
          marca,
          ano,
          descricao,
          vendido,
        });
        alert('Veiculo criado com sucesso!');
      }
      setEditSelectId(0);
      window.location.reload();
    } catch (err) {
      const data = get(err, 'response.data', {});
      const errors = get(data, 'errors', []);
      if (errors.length > 0) {
        errors.map((error) => alert(error));
      } else {
        alert('Erro desconhecido');
      }
    }
  };

  return (
    <>
      <Container>
        <h1>Tabela de Veiculos</h1>
        <VeiculosContainer>
          {veiculos.map((veiculos, index) => (
            <div key={String(veiculos.id)}>
              {/* { <ImageVeiculo>
                {get(veiculos, 'fotos[0].url', false) ? (
                  <img src={veiculos.fotos[0].url} alt="" />
                ) : (
                  <FaUserCircle size={36} />
                )}
              </ImageVeiculo> */}

              <span>{veiculos.veiculo}</span>
              <span>{veiculos.marca}</span>
              <span>{veiculos.ano}</span>
              <span>{veiculos.descricao}</span>
              <span>{veiculos.created_at}</span>

              <FaEdit
                size={16}
                cursor="pointer"
                onClick={(e) => handleEdit(e, veiculos.id, index)}
              />

              <Link
                onClick={handleDeleteAsk}
                to={`/veiculos/${veiculos.id}/delete`}
              >
                <FaWindowClose size={16} />
              </Link>

              <FaExclamation
                size={16}
                display="none"
                cursor="pointer"
                onClick={(e) => handleDelete(e, veiculos.id, index)}
              />
            </div>
          ))}
        </VeiculosContainer>
      </Container>
      <Container>
        <h1>Cadastro de Veiculos</h1>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            value={veiculo}
            onChange={(e) => setNomeVeiculo(e.target.value)}
            placeholder="Nome"
          />
          <input
            type="text"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            placeholder="Marca"
          />
          <input
            type="number"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
            placeholder="Ano"
          />
          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descrição"
          />
          <label>
            Vendido
            <input
              type="checkbox"
              id="checkVendido"
              checked={vendido}
              onChange={(e) => setVendido(e.target.checked)}
              placeholder="Vendido"
            />
          </label>

          <button type="submit">Enviar</button>
        </Form>
      </Container>
    </>
  );
}
