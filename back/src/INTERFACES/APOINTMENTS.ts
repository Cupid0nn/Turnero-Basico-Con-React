
export default interface IApointments {
    id?: number;
    date: TDate;
    time: string;
    status: TStatus;
    userId?: number;
}

export type TStatus = "active" | "cancelled";
type TDate = number | string;

