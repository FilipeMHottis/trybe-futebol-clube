import ServiceResponse from '../Interfaces/serviceResponse';
import IMatches from '../Interfaces/db/IMatches';
import MatchesModel from '../model/matches.model';

interface Service {
  getAllMatches(): Promise<ServiceResponse<IMatches[]>>;
  getAllMatchesInProgress(inProgress: boolean): Promise<ServiceResponse<IMatches[]>>;
}

class MatchesService implements Service {
  private model = new MatchesModel();

  public async getAllMatches(): Promise<ServiceResponse<IMatches[]>> {
    const matches = await this.model.getAllMatches();

    if (!matches) return { status: 'notFound', data: { message: 'No matches found' } };

    return { status: 'ok', data: matches };
  }

  public async getAllMatchesInProgress(inProgress: boolean): Promise<ServiceResponse<IMatches[]>> {
    let matches: IMatches[] = [];

    if (inProgress) matches = await this.model.getMatchesInProgress();
    else matches = await this.model.getMatchesFinished();

    if (!matches) return { status: 'notFound', data: { message: 'No matches found' } };

    return { status: 'ok', data: matches };
  }
}

export default MatchesService;
