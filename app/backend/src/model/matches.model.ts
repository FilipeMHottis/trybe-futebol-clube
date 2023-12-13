import Teams from '../database/models/teamsModel';
import Matches from '../database/models/matchesModel';
import IMatches from '../Interfaces/db/IMatches';

interface Model {
  getAllMatches(): Promise<IMatches[]>;
  getMatchesInProgress(): Promise<IMatches[]>;
  getMatchesFinished(): Promise<IMatches[]>;
}

class MatchesModel implements Model {
  private db = Matches;

  public async getAllMatches(): Promise<IMatches[]> {
    const matches = await this.db.findAll({
      include: [
        {
          model: Teams,
          as: 'homeTeam',
          attributes: ['teamName'],
        },
        {
          model: Teams,
          as: 'awayTeam',
          attributes: ['teamName'],
        },
      ],
    });

    return matches;
  }

  public getMatchesInProgress(): Promise<IMatches[]> {
    const matches = this.db.findAll({
      where: { inProgress: true },
      include: [
        {
          model: Teams,
          as: 'homeTeam',
          attributes: ['teamName'],
        },
        {
          model: Teams,
          as: 'awayTeam',
          attributes: ['teamName'],
        },
      ],
    });

    return matches;
  }

  public getMatchesFinished(): Promise<IMatches[]> {
    const matches = this.db.findAll({
      where: { inProgress: false },
      include: [
        {
          model: Teams,
          as: 'homeTeam',
          attributes: ['teamName'],
        },
        {
          model: Teams,
          as: 'awayTeam',
          attributes: ['teamName'],
        },
      ],
    });

    return matches;
  }
}

export default MatchesModel;
