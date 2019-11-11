export interface Configuration {
    isPublic?: boolean;
    value: boolean;
    key: string;
}

export interface OptimizationOptions {
    balance: boolean;
    allVehicles: boolean;
    openEnded: boolean;
    bigCluster: boolean;
    join: boolean;
    bigClusterOptimize: boolean;
    lastPositionOptimize: boolean;
    fmv: number;
    singleTour: boolean;
    beauty: boolean;
}

export enum AccountStatus {
    Trialing = 'trialing',
    Active = 'active',
    PastDue = 'past_due',
    Registered = 'registered',
    Canceled = 'canceled',
}

export interface Account {
    id: number;
    country: string;
    status: AccountStatus;
    name: string;
    activeUntil: Date;
    planQuantity: number;
    optimizationOptions: OptimizationOptions;
    configs: Configuration[];
    timezone: string;
    vehicleQuantity: string;
}

export interface User {
    id: number;
    username: string;
    name: string;
    phone: string;
    email: string;
    created: Date;
    modified: Date;
    lastLogin: Date;
    isOwner: boolean;
    isAdmin: boolean;
    isDriver: boolean;
    isMonitor: boolean;
    isCoordinator: boolean;
    isRouter: boolean;
    isStaff: boolean;
    account?: Account;
}
