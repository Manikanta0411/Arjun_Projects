import { createSlice } from "@reduxjs/toolkit";

interface DataState {
  user: any;
  role: any;
  lobe: any;
  businessEntity: any;
  action: any;
  entity: any;
  tax: any;
  taxName: any;
  repository: any;
  heading: any;
  selectedEntity: any;
  viewData: any;
  email: any;
  taxDocument: any;
  taxDetails: TaxDetails;
  taxNames: any;
  calculationCode: any;
  calculation: any;
  taxAddOrUpdate: any;
  calAddOrUpdate: any;
  vehiclesCount: any;
}

interface TaxDetails {
  taxCode: any;
  taxName: any;
  regNo: any;
  rate: any;
  calculationCode: any;
  tdsWthTax: any;
  isTdsWthReq: any;
  isTaxUnderRevCharge: any;
  isActive: any;
  isNegative: any;
  businessEntityId: any;
}

const initialState: DataState = {
  user: null,
  role: null,
  lobe: null,
  businessEntity: null,
  action: null,
  entity: null,
  tax: null,
  taxName: null,
  repository: null,
  heading: null,
  selectedEntity: null,
  viewData: null,
  email: null,
  taxDocument: null,
  calculationCode: null,
  calAddOrUpdate: null,
  taxNames: null,
  calculation: null,
  taxAddOrUpdate: null,
  taxDetails: {
    taxCode: null,
    taxName: null,
    regNo: null,
    rate: null,
    calculationCode: null,
    tdsWthTax: null,
    isTdsWthReq: null,
    isTaxUnderRevCharge: null,
    isActive: null,
    isNegative: null,
    businessEntityId: null,
  },
  vehiclesCount: 1,
};

export const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    getUser: (state: any, { payload }) => {
      state.user = payload;
    },
    getRole: (state: any, { payload }) => {
      state.role = payload;
    },
    getLobe: (state: any, { payload }) => {
      state.lobe = payload;
    },
    getBusinessEntity: (state: any, { payload }) => {
      state.businessEntity = payload;
    },
    getAction: (state: any, { payload }) => {
      state.action = payload;
    },
    getHeading: (state: any, { payload }) => {
      state.heading = payload;
    },
    getEntity: (state: any, { payload }) => {
      state.entity = payload;
    },
    getTax: (state: any, { payload }) => {
      state.tax = payload;
    },
    getTaxAddOrUpdate: (state: any, { payload }) => {
      state.taxAddOrUpdate = payload;
    },
    getTaxNames: (state: any, { payload }) => {
      state.taxNames = payload;
    },
    getTaxName: (state: any, { payload }) => {
      state.taxName = payload;
    },
    getCalculationCode: (state: any, { payload }) => {
      state.calculationCode = payload;
    },
    getCalAddOrUpdate: (state: any, { payload }) => {
      state.calAddOrUpdate = payload;
    },
    getCalculation: (state: any, { payload }) => {
      state.calculation = payload;
    },
    getRepository: (state: any, { payload }) => {
      state.repository = payload;
    },
    getSelectedEntity: (state: any, { payload }) => {
      state.selectedEntity = payload;
    },
    getViewData: (state: any, { payload }) => {
      state.viewData = payload;
    },
    getEmail: (state: any, { payload }) => {
      state.email = payload;
    },
    getTaxDocument: (state: any, { payload }) => {
      state.taxDocument = payload;
    },
    getTaxDetails: (state: any, { payload }) => {
      state.taxDetails = payload;
    },
    getVehiclesCount: (state: any, { payload }) => {
      state.vehiclesCount = payload;
    },
    clearStoreData: () => {
      return initialState;
    },
  },
});

export const {
  getUser,
  getRole,
  getLobe,
  getBusinessEntity,
  getAction,
  getHeading,
  getEntity,
  getTax,
  getRepository,
  getSelectedEntity,
  getViewData,
  getEmail,
  getTaxDocument,
  getTaxDetails,
  getTaxNames,
  getCalculationCode,
  getTaxAddOrUpdate,
  clearStoreData,
} = dataSlice.actions;

export default dataSlice.reducer;
