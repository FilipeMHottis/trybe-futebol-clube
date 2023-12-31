interface IMatches {
  id?: number;
  homeTeamId: number;
  homeTeamGoals: number;
  awayTeamId: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

interface NewMatch {
  id?: number;
  homeTeamId: number;
  awayTeamId: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}

interface IMatchesWithTeams extends IMatches {
  homeTeam: {
    teamName: string;
  };
  awayTeam: {
    teamName: string;
  };
}

export { NewMatch, IMatchesWithTeams };
export default IMatches;
