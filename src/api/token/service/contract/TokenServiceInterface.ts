/**
 * Interface TokenServiceInterface
 */
export interface TokenServiceInterface {
    /**
     * 
     * @param request
     */
    generate(request: any): Promise<any>;

    /**
     * 
     * @param request
     */
    validate(request: any): Promise<any>;
}