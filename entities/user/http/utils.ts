import { HTTPUser, HTTPAccount, HTTPConfiguration } from './types';

import {
    User,
    Account,
    AccountStatus,
    OptimizationOptions,
    Configuration,
} from '../types';

export const parseAccount = (httpAccount: HTTPAccount): Account => {
    const account: Account = {} as Account;
    const optiOptions: OptimizationOptions = {} as OptimizationOptions;

    // account info
    account.id = httpAccount.id;
    account.country = httpAccount.country;
    account.status = httpAccount.status as AccountStatus;
    account.name = httpAccount.name;
    account.activeUntil = new Date(httpAccount.active_until);
    account.planQuantity = httpAccount.plan_quantity;
    account.timezone = httpAccount.timezone;
    account.vehicleQuantity = httpAccount.vehicle_quantity;

    // optimization options
    optiOptions.balance = httpAccount.optimization_options.balance;
    optiOptions.allVehicles = httpAccount.optimization_options.all_vehicles;
    optiOptions.openEnded = httpAccount.optimization_options.open_ended;
    optiOptions.bigCluster = httpAccount.optimization_options.big_cluster;
    optiOptions.join = httpAccount.optimization_options.join;
    optiOptions.bigClusterOptimize =
        httpAccount.optimization_options.big_cluster_optimize;
    optiOptions.lastPositionOptimize =
        httpAccount.optimization_options.last_position_optimize;
    optiOptions.fmv = Number(httpAccount.optimization_options.fmv);
    optiOptions.singleTour = httpAccount.optimization_options.single_tour;
    optiOptions.beauty = httpAccount.optimization_options.beauty;

    // configs
    const configurations: Configuration[] = httpAccount.configs.map(
        (conf: HTTPConfiguration): Configuration => ({
            value: conf.value,
            key: conf.key,
        }),
    );

    account.optimizationOptions = optiOptions;
    account.configs = configurations;

    return account;
};

export const parse = (httpUser: HTTPUser): User => {
    const user: User = {} as User;

    user.id = httpUser.id;
    user.username = httpUser.username;
    user.name = httpUser.name;
    user.phone = httpUser.phone;
    user.email = httpUser.email;
    user.created = new Date(httpUser.created);
    user.modified = new Date(httpUser.modified);
    user.lastLogin = new Date(httpUser.last_login);
    user.isOwner = httpUser.is_owner;
    user.isAdmin = httpUser.is_admin;
    user.isDriver = httpUser.is_driver;
    user.isMonitor = httpUser.is_monitor;
    user.isCoordinator = httpUser.is_coordinator;
    user.isRouter = httpUser.is_router;
    user.isStaff = httpUser.is_staff;

    if (httpUser.account) {
        user.account = parseAccount(httpUser.account);
    }

    return user;
};
