import React from "react";
import { DataGrid, GridColumn, NumberBox, ComboBox } from "rc-easyui";
class DataGridPersonnel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.getData(),
      operators: ["nofilter", "equal", "notequal", "less", "greater"],
      employee_type: [
        { value: null, text: "All" },
        { value: "employee", text: "Employee" },
        { value: "freelancer", text: "Freelancer" }
      ],
      company: [
        { value: null, text: "All" },
        { value: "awc", text: "AWC" },
        { value: "ruc", text: "RUC" },
        { value: "ptruc", text: "PTRUC" }
      ],
      position: [
        { value: null, text: "All" },
        { value: "application support", text: "Application Support" },
        { value: "chief executive officer", text: "Chief Executive Officer" },
        {
          value: "chief information officer",
          text: "Chief Information Officer"
        },
        { value: "data analist", text: "Data Analist" },
        { value: "data entry", text: "Data Entry" },
        { value: "data entry manager", text: "Data Entry Manager" },
        { value: "designer", text: "Designer" },
        { value: "junior programmer", text: "Junior Programmer" },
        { value: "senior programmer", text: "Senior Programmer" }
      ],
      contract_type: [
        { value: null, text: "All" },
        { value: "first contract", text: "First Contract" },
        { value: "amandement", text: "Amandement" },
        { value: "probation", text: "Probation" }
      ]
    };
  }
  getData() {
    return [
      {
        id: 1,
        name: "Alex Whitton",
        employee_type: "Employee",
        company: "AWC",
        position: "Chief Executive Officer",
        contract_type: "First Contract",
        departement: "Management"
      },
      {
        id: 2,
        name: "Alex Febrian",
        employee_type: "Employee",
        company: "AWC",
        position: "Senior Programmer",
        contract_type: "Amandement",
        departement: "Management"
      },
      {
        id: 3,
        name: "David Corner",
        employee_type: "Freelancer",
        company: "RUC",
        position: "Data Analist",
        contract_type: "First Contract",
        departement: "Management"
      },
      {
        id: 4,
        name: "Angga Firmansyah",
        employee_type: "Employee",
        company: "PTRUC",
        position: "Designer",
        contract_type: "Probation",
        departement: "Management"
      },
      {
        id: 5,
        name: "Daniel Kim",
        employee_type: "Employee",
        company: "RUC",
        position: "Data Entry Manager",
        contract_type: "Amandement",
        departement: "Management"
      },
      {
        id: 6,
        name: "Kyla Nina",
        employee_type: "Employee",
        company: "PTRUC",
        position: "Application Support",
        contract_type: "First Contract",
        departement: "Management"
      },
      {
        id: 7,
        name: "Dian Safitri",
        employee_type: "Employee",
        company: "AWC",
        position: "Data Entry",
        contract_type: "Amandement",
        departement: "Management"
      }
    ];
  }
  render() {
    return (
      <DataGrid filterable data={this.state.data} style={{ height: "100vh" }}>
        <GridColumn field="id" title="ID"></GridColumn>
        <GridColumn field="name" title="Name"></GridColumn>
        <GridColumn
          field="employee_type"
          title="EMPLOYEE TYPE"
          filter={() => (
            <ComboBox
              data={this.state.employee_type}
              editable={false}
              inputStyle={{ textAlign: "center" }}
            />
          )}
        />
        <GridColumn
          field="company"
          title="COMPANY"
          filter={() => (
            <ComboBox
              data={this.state.company}
              editable={false}
              inputStyle={{ textAlign: "center" }}
            />
          )}
        />
        <GridColumn
          field="position"
          title="POSITION"
          filter={() => (
            <ComboBox
              data={this.state.position}
              editable={false}
              inputStyle={{ textAlign: "center" }}
            />
          )}
        />
        <GridColumn
          field="contract_type"
          title="CONTRACT TYPE"
          filter={() => (
            <ComboBox
              data={this.state.contract_type}
              editable={false}
              inputStyle={{ textAlign: "center" }}
            />
          )}
        />
        <GridColumn field="departement" title="DEPARTEMENT"></GridColumn>
      </DataGrid>
    );
  }
}

export default DataGridPersonnel;
