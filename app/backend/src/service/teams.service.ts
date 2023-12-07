import ServiceResponse from '../Interfaces/serviceResponse';
import ITeams from '../Interfaces/db/ITeams';
import TeamsModel from '../model/teams.model';

interface TeamService {
  getAllTeams(): Promise<ServiceResponse<ITeams[]>>;
  getById(id: number): Promise<ServiceResponse<ITeams | null>>;
}

class TeamsService implements TeamService {
  private model = new TeamsModel();

  public async getAllTeams(): Promise<ServiceResponse<ITeams[]>> {
    const teams = await this.model.getAllTeams();
    return { status: 'ok', data: teams };
  }

  public async getById(id: number): Promise<ServiceResponse<ITeams | null>> {
    const team = await this.model.getById(id);

    if (!team) {
      return { status: 'notFound', data: { message: 'Team not found' } };
    }

    return { status: 'ok', data: team };
  }
}

export default TeamsService;
