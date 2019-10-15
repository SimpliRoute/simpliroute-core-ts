import Vehicle from '../entities/vehicle';

export default interface UserUseCase {
    getVehicles(): Promise<Vehicle>;
};
