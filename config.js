'use strict';

module.exports = {
  addresses: {
    CLIENT: 'http://localhost:3000',
    SERVER: 'http://localhost:53993',
    DROP_DATABASE_ENDPOINT: '/api/Database/Drop'
  },
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
  elements: {
    loginPage: {
      usernameInput: '986fff3e-3acb-405a-ae08-a4044481b962',
      passwordInput: '9aa3d436-2a70-4480-bde8-fd04a448618f',
      enterButton: 'ed133c12-8c21-4313-a55a-7cd0c772cc7f',
      logOutButton: '4aa30caf-e786-4219-8e46-50d399e03eaf'
    },
    salesPage: {
      showWhenOpenedSelect: '80b1187d-4958-47c9-8e07-51dba8807d75',
      closeHelpModalButton: '5921aace-0d81-4cd7-a47c-9ee11a41e7ef'
    },
    components: {
      menus: [{
        id: 'fd5acbb8-91c7-4ec2-8164-6c325205470a',
        name: 'registers'
      }, {
        id: 'fa92cc76-2ae0-4ec2-b712-d00afb68674a',
        name: 'capacities'
      }, {
        id: '57d83201-5cdd-4294-9cea-01a58c80e21a',
        name: 'inputOutput'
      }, {
        id: 'b9159de1-3b29-4c18-9c00-4e519cc3e416',
        name: 'simulation'
      }, {
        id: '8c7d86de-75dd-4fc6-b6f9-53486dfa6d3b',
        name: 'settings'
      }, {
        id: '004d711f-00a7-4997-8437-b248ad783c20',
        name: 'sales'
      }],
      submenus: [{
        id: '7d8fff37-c1d3-4557-818c-ba5e14c8f733',
        name: 'periods'
      }, {
        id: '3dca4820-8ff8-45a0-b7e8-4840108069fc',
        name: 'calendar'
      }, {
        id: 'e152a01e-8e77-4005-94fc-7c673cbdf982',
        name: 'equipments'
      }, {
        id: '98b42747-93c8-4e73-9e00-5c008868e34c',
        name: 'processes'
      }, {
        id: 'b935ac07-947d-4d0b-bfab-c8f61c28f005',
        name: 'products'
      }, {
        id: '0b3971b7-612d-4ef5-adf4-08fe923ebab5',
        name: 'fields'
      }, {
        id: 'e87fb1e5-3bb0-4d1f-a84f-a5a909689f83',
        name: 'materials'
      }, {
        id: 'fcdd96e9-1a7e-46ea-a506-e80345fdddfd',
        name: 'partNumber'
      }, {
        id: 'fb6cbd92-72bf-4789-92c8-c7d72c889834',
        name: 'customer'
      }, {
        id: '01f69d35-e675-44c7-9117-a5899da2b1f4',
        name: 'setupKits'
      }, {
        id: '1de82b12-7306-451e-94d3-12f08d49359a',
        name: 'rhFactor'
      }, {
        id: 'd672cfd4-3782-4a8b-990b-df36a1a6cad5',
        name: 'uphAndCycle'
      }, {
        id: '700e80bd-d92f-48aa-9136-cdfa6a095fb3',
        name: 'capacityPerPeriod'
      }, {
        id: 'b1156c47-f30f-411e-908b-944f97b4a2ca',
        name: 'inputOutput'
      }, {
        id: 'e9ff202a-3a39-4f2b-9386-325721b4e7db',
        name: 'analysis'
      }, {
        id: 'd5a00f5a-2790-4d18-b7ae-2a63916ef93b',
        name: 'waterfall'
      }, {
        id: '36c8284b-0a05-4894-8774-a9f36b8bf99f',
        name: 'fullfilled'
      }, {
        id: 'c36a11fb-40d6-44aa-b42a-3a44ea1c57ae',
        name: 'inputOutputProportional'
      }, {
        id: '50201881-1c25-4380-b85b-29cd11a761e8',
        name: 'regular'
      }, {
        id: 'b5a09962-8032-48bc-81e1-94e14b28cbe7',
        name: 'simulationProportional'
      }, {
        id: 'bbd76e0d-f171-4890-ba05-7f84877f9ece',
        name: 'users'
      }, {
        id: '0f27bc17-f8ea-4dda-b16d-11cd8815aa74',
        name: 'audit'
      }, {
        id: '2a44425d-3104-4b9f-ac85-7548a0fbb74b',
        name: 'dataForecast'
      }, {
        id: '7519cccc-a7a0-4fc2-82ba-17bd642ddca1',
        name: 'balance'
      }, {
        id: 'b1cd2243-b67a-4094-97cd-d0da05d04e73',
        name: 'semesterForecast'
      }]
    }
  }
};
