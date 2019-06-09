export default interface Plan {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    created: string;
    modified: string;
    isCluster: boolean;
    routeIds: string[];
}
