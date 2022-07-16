export interface ApiResponse {
  effectiveDate: string;
  no: string;
  rates: {
    code: string;
    currency: string;
    mid: number
  }[],
  table: string;
}
