import { Transformer } from "../../../lib/transformer/Transformer";
import { UserInterface } from "../model/contract/UserInterface";

/**
 * Class UserListTransformer
 */
export class UserListTransformer extends Transformer {
    /**
     * 
     * @returns
     */
	async setData(): Promise<any> {
        if(!this.data) {
            return {}
        }
        return await this.setDataPaginated(this.data)
    }

    /**
     * 
     * @param user
     * @returns
     */
    async setFormat(user: UserInterface): Promise<any> {
        return {
			id: user.id,
			email: user.email,
			username: user.username,
			identity_number: user.identity_number,
			account_number: user.account_number,
		};
    }
}
