/**
 * Interface TokenGeneratorActionInterface
 */
export interface TokenGeneratorActionInterface {
    /**
     * @param request
     */
    process(request: any): Promise<{token: string|null}>;
}