import Vehicle from '../entities/vehicle';

export default interface AccountRepository {
    getVehicles(token: string): Promise<Vehicle>;
}