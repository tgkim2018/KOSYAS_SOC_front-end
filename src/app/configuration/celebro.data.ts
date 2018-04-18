/* Elasticsearch like Celebro */
export interface CelebroOverview_data {
    node: number;
    indices: number;
    shards: number;
    docs: string;
    disk: string;
}

export interface CelebroOverview {
    error: string;
    data: CelebroOverview_data;
}