export interface HTTPConfiguration {
    value: boolean;
    key: string;
}

export interface HTTPOptimizationOptions {
    balance: boolean;
    all_vehicles: boolean;
    open_ended: boolean;
    big_cluster: boolean;
    join: boolean;
    big_cluster_optimize: boolean;
    last_position_optimize: boolean;
    fmv: string;
    single_tour: boolean;
    beauty: boolean;
}

export interface HTTPAccount {
    id: number;
    country: string;
    status: string;
    name: string;
    active_until: string;
    plan_quantity: number;
    optimization_options: HTTPOptimizationOptions;
    configs: HTTPConfiguration[];
    timezone: string;
    vehicle_quantity: string;
}

export interface HTTPUser {
    id: number;
    username: string;
    name: string;
    phone: string;
    email: string;
    is_owner: boolean;
    is_admin: boolean;
    is_driver: boolean;
    is_monitor: boolean;
    is_coordinator: boolean;
    is_router: boolean;
    is_staff: boolean;
    created: string;
    modified: string;
    last_login: string;
    account?: HTTPAccount;
}
