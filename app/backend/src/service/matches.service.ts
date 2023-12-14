import ServiceResponse from '../interfaces/serviceResponse';
import IMatches, { NewMatch } from '../interfaces/db/IMatches';
import MatchesModel from '../model/matches.model';

const mensagens = {
  notFound: 'No matches found',
};

interface Service {
  getAllMatches(): Promise<ServiceResponse<IMatches[]>>;
  getAllMatchesInProgress(inProgress: boolean): Promise<ServiceResponse<IMatches[]>>;
  getMatcheById(id: number): Promise<ServiceResponse<IMatches>>;
  updateProgress(id: number): Promise<ServiceResponse<object>>;
  updateScore(id: number, homeScore: number, awayScore: number): Promise<ServiceResponse<IMatches>>;
  postNewMatch(newMatch: NewMatch): Promise<ServiceResponse<IMatches>>;
}

class MatchesService implements Service {
  private model = new MatchesModel();

  public async getAllMatches(): Promise<ServiceResponse<IMatches[]>> {
    const matches = await this.model.getAllMatches();

    if (!matches) return { status: 'notFound', data: { message: mensagens.notFound } };

    return { status: 'ok', data: matches };
  }

  public async getAllMatchesInProgress(inProgress: boolean): Promise<ServiceResponse<IMatches[]>> {
    let matches: IMatches[] | null = [];

    if (inProgress) matches = await this.model.getMatchesInProgress();
    else matches = await this.model.getMatchesFinished();

    if (!matches) return { status: 'notFound', data: { message: mensagens.notFound } };

    return { status: 'ok', data: matches };
  }

  public async getMatcheById(id: number): Promise<ServiceResponse<IMatches>> {
    const matche = await this.model.getMatcheById(id);

    if (!matche) return { status: 'notFound', data: { message: mensagens.notFound } };

    return { status: 'ok', data: matche };
  }

  public async updateProgress(id: number): Promise<ServiceResponse<object>> {
    const matche = await this.model.updateProgress(id);

    if (!matche) return { status: 'notFound', data: { message: mensagens.notFound } };

    return { status: 'ok', data: { message: matche } };
  }

  public async updateScore(
    id: number,
    homeScore: number,
    awayScore: number,
  ): Promise<ServiceResponse<IMatches>> {
    const matche = await this.model.updateScore(id, homeScore, awayScore);

    if (!matche) return { status: 'notFound', data: { message: mensagens.notFound } };

    return { status: 'ok', data: matche };
  }

  public async postNewMatch(newMatch: NewMatch): Promise<ServiceResponse<IMatches>> {
    const team1 = await this.model.getMatcheById(newMatch.homeTeamId);
    const team2 = await this.model.getMatcheById(newMatch.awayTeamId);
    if (!team1 || !team2) {
      return { status: 'notFound', data: { message: 'There is no team with such id!' } };
    }

    if (team1.id === team2.id) {
      return {
        status: 'unprocessableEntity',
        data: { message: 'It is not possible to create a match with two equal teams' },
      };
    }

    const matche = await this.model.postNewMatch(newMatch);
    if (!matche) return { status: 'notFound', data: { message: mensagens.notFound } };

    return { status: 'created', data: matche };
  }
}

export default MatchesService;
