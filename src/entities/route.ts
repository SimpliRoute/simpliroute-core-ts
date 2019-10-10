import RouteStatus from './RouteStatus';

export default interface Route {
    id: string;
    vehicleId: number;
    driverId: number;
    planId: string;
    status: RouteStatus;
    plannedDate: string;
    estimated_time_start: string;
    estimated_time_end: string;
    total_duration: string;
    total_distance: number;
    total_load: number;
    total_load_percentage: number;
    total_load_2: number;
    total_load_2_percentage: number;
    total_load_3: number;
    total_load_3_percentage: number;
    location_start_address: string;
    location_start_latitude: string;
    location_start_longitude: string;
    location_end_address: string;
    location_end_latitude: string;
    location_end_longitude: string;
    comment?: string;
    start_time?: string;
    end_time?: string;
    created: string;
    modified: string;
}
