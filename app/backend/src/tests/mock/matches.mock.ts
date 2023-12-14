import IMatches, { NewMatch } from '../../interfaces/db/IMatches';

export const allMatches: IMatches[] = [
    {
        id: 1,
        homeTeamId: 1,
        awayTeamId: 2,
        homeTeamGoals: 1,
        awayTeamGoals: 0,
        inProgress: false,
    },
    {
        id: 2,
        homeTeamId: 3,
        awayTeamId: 4,
        homeTeamGoals: 0,
        awayTeamGoals: 0,
        inProgress: true,
    },
];

export const oneMatch: IMatches = allMatches[0];

export const newMatch: NewMatch = {
    homeTeamId: 1,
    awayTeamId: 2,
    homeTeamGoals: 0,
    awayTeamGoals: 0,
};

export const updatedMatch = {
    id: 1,
    homeTeamId: 1,
    awayTeamId: 2,
    homeTeamGoals: 1,
    awayTeamGoals: 0,
    inProgress: false,
    save() {},
};
