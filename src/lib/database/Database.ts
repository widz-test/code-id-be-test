/**
 * Class Database
 */
export class Database {
	async handle() {
		await this.openMainDataSource();
	}

	async closed() {
		
	}

	async openMainDataSource() {
		try {
			
		} catch (e) {
			console.error(
				"\u274C",
				"Error during Main Data Source initialization",
				e
			);
		}
	}
}
