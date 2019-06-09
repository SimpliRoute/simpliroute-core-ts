import AccountStatus from './AccountStatus';
import OptimizationOptions from './OptimizationOptions';
import AccountConfiguration from './AccountConfiguration';

export default interface Account {
    id: number;
    country: string;
    status: AccountStatus;
    name: string;
    activeUntil: string;
    planQuantity: number;
    optimizationOptions: OptimizationOptions;
    configs: AccountConfiguration[];
    timezone: string;
    vehicleQuantity: string;
}
