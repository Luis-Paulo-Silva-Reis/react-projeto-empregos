import React, { Component } from 'react';
import axios from 'axios';
import UserProfile from './UserProfile';

class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: null,
    };
  }

  componentDidMount() {
    this.fetchUserData();
  }

  async fetchUserData() {
    try {
      const response = await axios.get('http://localhost:3000/users');
      const { nome, email } = response.data;

      this.setState({
        userData: {
          name: nome,
          email: email,
        },
      });
    } catch (error) {
      console.error('Erro ao buscar os dados do usuário:', error);
    }
  }

  render() {
    return (
      <div>
        <h1>Perfil do Usuário</h1>
        {this.state.userData ? (
          <UserProfile />
        ) : (
          <p>Carregando dados do usuário...</p>
        )}
      </div>
    );
  }
}

export default ParentComponent;
