import Teams from '../database/models/teamsModel';
import Matches from '../database/models/matchesModel';
import IMatches, { NewMatch } from '../interfaces/db/IMatches';

interface Model {
  getAllMatches(): Promise<IMatches[] | null>;
  getMatchesInProgress(): Promise<IMatches[] | null>;
  getMatchesFinished(): Promise<IMatches[] | null>;
  getMatcheById(id: number): Promise<IMatches | null>;
  updateProgress(id: number): Promise<'Finished' | 'March is now over' | null>;
  updateScore(id: number, homeScore: number, awayScore: number): Promise<IMatches | null>;
  postNewMatch(newMatch: NewMatch): Promise<IMatches | null>;
}

class MatchesModel implements Model {
  private db = Matches;

  public async getAllMatches(): Promise<IMatches[] | null> {
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

  public getMatchesInProgress(): Promise<IMatches[] | null> {
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

  public getMatchesFinished(): Promise<IMatches[] | null> {
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

  public async getMatcheById(id: number): Promise<IMatches | null> {
    const matches = await this.db.findOne({
      where: { id },
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

  public async updateProgress(id: number): Promise<'Finished' | 'March is now over' | null> {
    const match = await this.db.findOne({ where: { id } });

    if (!match) return null;

    if (match.inProgress) {
      match.inProgress = false;
      await match.save();
      return 'Finished';
    }

    return 'March is now over';
  }

  public async updateScore(
    id: number,
    homeScore: number,
    awayScore: number,
  ): Promise<IMatches | null> {
    const match = await this.db.findOne({ where: { id } });

    if (!match) return null;

    match.homeTeamGoals = homeScore;
    match.awayTeamGoals = awayScore;
    await match.save();

    return match;
  }

  public async postNewMatch(newMatch: NewMatch): Promise<IMatches | null> {
    const match = await this.db.create({
      ...newMatch,
      inProgress: true,
    });

    return match;
  }
}

export default MatchesModel;
