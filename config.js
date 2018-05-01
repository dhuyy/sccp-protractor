'use strict';

const constants = {
  server: {
    URL: 'http://localhost:3000/'
  }
};

const internals = {
  roles: {
    admin: {
      username: 'sccp',
      password: 'venturus2016'
    },
    engineer: {
      username: 'engineer',
      password: 'engineer'
    },
    viewer: {
      username: 'viewer',
      password: 'viewer'
    },
    planner: {
      username: 'planner',
      password: 'planner'
    },
    sales: {
      username: 'sales',
      password: 'sales'
    }
  },
  menus: {
    registers: ['registers', 'cadastros'],
    capacities: ['capacities', 'capacidades'],
    inputOutput: ['input/output'],
    simulation: ['simulation', 'simulacao'],
    settings: ['settings', 'configuracoes'],
    sales: ['sales', 'vendas']
  }
};

module.exports = {
  constants,
  internals
};
