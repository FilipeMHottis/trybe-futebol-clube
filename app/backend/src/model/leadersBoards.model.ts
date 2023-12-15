import MatchesModel from './matches.model';

interface Model {
  getTotalPoints: (teamId: number, homeOraway: 'home' | 'away' | 'any') => Promise<number>;
  getTotalGames: (teamId: number, homeOraway: 'home' | 'away' | 'any') => Promise<number>;
  getTotalVictories: (teamId: number, homeOraway: 'home' | 'away' | 'any') => Promise<number>;
  getTotalDraws: (teamId: number, homeOraway: 'home' | 'away' | 'any') => Promise<number>;
  getTotalLosses: (teamId: number, homeOraway: 'home' | 'away' | 'any') => Promise<number>;
  getGoalsFavor: (teamId: number, homeOraway: 'home' | 'away' | 'any') => Promise<number>;
  getGoalsOwn: (teamId: number, homeOraway: 'home' | 'away' | 'any') => Promise<number>;
  getGoalsBalance: (teamId: number, homeOraway: 'home' | 'away' | 'any') => Promise<number>;
  getEffiviency: (teamId: number, homeOraway: 'home' | 'away' | 'any') => Promise<number>;
}

class LeaderboardsModel implements Model {
  private matchesModel = new MatchesModel();

  public async getTotalPoints(i: number, h: 'home' | 'away' | 'any'): Promise<number> {
    let matches;
    if (h === 'home') {
      matches = await this.matchesModel.getAllMatchesByTeamIdHome(i);
    } else if (h === 'away') {
      matches = await this.matchesModel.getAllMatchesByTeamIdAway(i);
    } else {
      matches = await this.matchesModel.getAllMatchesByTeamId(i);
    }
    if (!matches) return 0;

    const totalPoints = matches.reduce((acc, match) => {
      let newAcc = acc;

      if (match.homeTeamGoals === match.awayTeamGoals) newAcc += 1;
      if (match.homeTeamGoals > match.awayTeamGoals) newAcc += 3;

      return newAcc;
    }, 0);
    return totalPoints || 0;
  }

  public async getTotalGames(teamId: number, homeOraway: 'home' | 'away' | 'any'): Promise<number> {
    let matches;
    if (homeOraway === 'home') {
      matches = await this.matchesModel.getAllMatchesByTeamIdHome(teamId);
    } else if (homeOraway === 'away') {
      matches = await this.matchesModel.getAllMatchesByTeamIdAway(teamId);
    } else {
      matches = await this.matchesModel.getAllMatchesByTeamId(teamId);
    }
    if (!matches) return 0;

    return matches.length || 0;
  }

  public async getTotalVictories(i: number, homeOraway: 'home' | 'away' | 'any'): Promise<number> {
    let matches;
    if (homeOraway === 'home') {
      matches = await this.matchesModel.getAllMatchesByTeamIdHome(i);
    } else if (homeOraway === 'away') {
      matches = await this.matchesModel.getAllMatchesByTeamIdAway(i);
    } else {
      matches = await this.matchesModel.getAllMatchesByTeamId(i);
    }
    if (!matches) return 0;

    const totalVictories = matches.reduce((acc, match) => {
      let newAcc = acc;
      if (match.homeTeamGoals > match.awayTeamGoals) {
        newAcc += 1;
      }
      return newAcc;
    }, 0);

    return totalVictories || 0;
  }

  public async getTotalDraws(teamId: number, homeOraway: 'home' | 'away' | 'any'): Promise<number> {
    let matches;
    if (homeOraway === 'home') {
      matches = await this.matchesModel.getAllMatchesByTeamIdHome(teamId);
    } else if (homeOraway === 'away') {
      matches = await this.matchesModel.getAllMatchesByTeamIdAway(teamId);
    } else {
      matches = await this.matchesModel.getAllMatchesByTeamId(teamId);
    }
    if (!matches) return 0;

    const totalDraws = matches.reduce((acc, match) => {
      let newAcc = acc;

      if (match.homeTeamGoals === match.awayTeamGoals) {
        newAcc += 1;
      }

      return newAcc;
    }, 0);

    return totalDraws || 0;
  }

  public async getTotalLosses(i: number, homeOraway: 'home' | 'away' | 'any'): Promise<number> {
    let matches;
    if (homeOraway === 'home') {
      matches = await this.matchesModel.getAllMatchesByTeamIdHome(i);
    } else if (homeOraway === 'away') {
      matches = await this.matchesModel.getAllMatchesByTeamIdAway(i);
    } else {
      matches = await this.matchesModel.getAllMatchesByTeamId(i);
    }
    if (!matches) return 0;

    const totalLosses = matches.reduce((acc, match) => {
      let newAcc = acc;

      if (match.homeTeamGoals < match.awayTeamGoals) {
        newAcc += 1;
      }

      return newAcc;
    }, 0);

    return totalLosses || 0;
  }

  public async getGoalsFavor(teamId: number, homeOraway: 'home' | 'away' | 'any'): Promise<number> {
    let matches;
    if (homeOraway === 'home') {
      matches = await this.matchesModel.getAllMatchesByTeamIdHome(teamId);
    } else if (homeOraway === 'away') {
      matches = await this.matchesModel.getAllMatchesByTeamIdAway(teamId);
    } else {
      matches = await this.matchesModel.getAllMatchesByTeamId(teamId);
    }
    if (!matches) return 0;

    const goalsFavor = matches.reduce((acc, match) => {
      let newAcc = acc;

      newAcc += match.homeTeamGoals;

      return newAcc;
    }, 0);

    return goalsFavor || 0;
  }

  public async getGoalsOwn(teamId: number, homeOraway: 'home' | 'away' | 'any'): Promise<number> {
    let matches;
    if (homeOraway === 'home') {
      matches = await this.matchesModel.getAllMatchesByTeamIdHome(teamId);
    } else if (homeOraway === 'away') {
      matches = await this.matchesModel.getAllMatchesByTeamIdAway(teamId);
    } else {
      matches = await this.matchesModel.getAllMatchesByTeamId(teamId);
    }
    if (!matches) return 0;

    const goalsOwn = matches.reduce((acc, match) => {
      let newAcc = acc;

      newAcc += match.awayTeamGoals;

      return newAcc;
    }, 0);

    return goalsOwn || 0;
  }

  public async getGoalsBalance(i: number, homeOraway: 'home' | 'away' | 'any'): Promise<number> {
    let matches;
    if (homeOraway === 'home') {
      matches = await this.matchesModel.getAllMatchesByTeamIdHome(i);
    } else if (homeOraway === 'away') {
      matches = await this.matchesModel.getAllMatchesByTeamIdAway(i);
    } else {
      matches = await this.matchesModel.getAllMatchesByTeamId(i);
    }
    if (!matches) return 0;

    const goalsBalance = matches.reduce((acc, match) => {
      let newAcc = acc;
      newAcc += match.homeTeamGoals - match.awayTeamGoals;
      return newAcc;
    }, 0);
    return goalsBalance || 0;
  }

  public async getEffiviency(teamId: number, homeOraway: 'home' | 'away' | 'any'): Promise<number> {
    let matches;
    if (homeOraway === 'home') {
      matches = await this.matchesModel.getAllMatchesByTeamIdHome(teamId);
    } else if (homeOraway === 'away') {
      matches = await this.matchesModel.getAllMatchesByTeamIdAway(teamId);
    } else {
      matches = await this.matchesModel.getAllMatchesByTeamId(teamId);
    }
    if (!matches) return 0;

    const totalPoints = await this.getTotalPoints(teamId, homeOraway);
    if (!totalPoints) return 0;

    const totalGames = await this.getTotalGames(teamId, homeOraway);
    if (!totalGames) return 0;

    const effiviency = Math.round(((totalPoints / (totalGames * 3)) * 100) * 100) / 100;

    return effiviency || 0;
  }
}

export default LeaderboardsModel;
