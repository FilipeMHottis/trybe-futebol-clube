import ServiceResponse from '../Interfaces/serviceResponse';
import ITeams from '../Interfaces/db/ITeams';
import TeamsModel from '../model/teams.model';

interface TeamService {
  getAllTeams(): Promise<ServiceResponse<ITeams[]>>;
}

class TeamsService implements TeamService {
  private model = new TeamsModel();

  public async getAllTeams(): Promise<ServiceResponse<ITeams[]>> {
    const teams = await this.model.getAllTeams();
    return { status: 'ok', data: teams };
  }
}

export default TeamsService;
