/**
 * Interface TokenValidationActionInterface
 */
export interface TokenValidationActionInterface {
    /**
     * 
     * @param request
     */
    process(request: any): Promise<any>;   
}