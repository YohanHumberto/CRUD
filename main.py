from flask import jsonify
import traceback

from src.tracking.usecases.tracking_deliveries_usecase import TrackingDeliveriesUsecase
from src.utils.utils import format_response

tracking_deliveries_usecase = TrackingDeliveriesUsecase()

def init(req):
    try:
        print("REQ: ", req)
        data = tracking_deliveries_usecase.get_data()
        message = 'Status change succesfuly'
        status_code = 200
        success = True
        response = format_response(success, data, message)
        
    except ValueError as value_error:
        print("VALUE ERROR: ", value_error)
        print("TRACE BACK: ", traceback.format_exc())
        data = {'message': str(value_error)}
        response = format_response(False, data, 'Error')
        status_code = 500
        
    return jsonify(response), status_code
    
