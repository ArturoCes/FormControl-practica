// Generated by https://quicktype.io

export interface FilmsResponse {
    count:    number;
    next:     null;
    previous: null;
    results:  Film[];
}

export interface Film {
    title:         string;
    episode_id:    number;
    opening_crawl: string;
    director:      string;
    producer:      string;
    release_date:  string;
    characters:    string[];
    planets:       string[];
    starships:     string[];
    vehicles:      string[];
    species:       string[];
    created:       string;
    edited:        string;
    url:           string;
}

