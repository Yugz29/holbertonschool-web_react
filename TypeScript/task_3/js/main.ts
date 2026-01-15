/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
    firstName: 'Boby',
    lastName: 'Jay'
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`New row ID: ${newRowID}`);

const updatedRow: RowElement = {
    firstName: 'Boby',
    lastName: 'Jay',
    age: 23
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
