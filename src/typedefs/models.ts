export interface MLAlgorithm {
  uid: string,
  name: string,
  description: string,
  targetFields: string,
  countOutliers: number
}

export interface JournalLineItem {
  uid: string,
  description: string,
  manualFlag: string,
  amount: number,
  amountCurrency: string,
  amountCreditDebitIndicator: string,
  glAccountNumber: string,
  effectiveDate: string,
  enteredDateTime: string,
  enteredBy: string,
  approvedBy: string,
  customerID: string,
  businessUnitCode: string,
  period: string,
  fiscalYear: string,
  has_parent: JournalHeader
}

export interface JournalHeader {
  uid: string,
  description: string,
  fiscalYear: number,
  has_child?: JournalLineItem[]
}

export interface HighRiskCriteria {
  uid: string,
  name?: string,
  countOutliers?: number,
  is_risky: JournalLineItem[],
  type?: string
}

export interface User{
  uid: string
}

export type MLOutlierResponse = { MLAlgorithm: MLAlgorithm[] }