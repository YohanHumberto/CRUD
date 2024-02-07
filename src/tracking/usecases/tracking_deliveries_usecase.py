from src.utils.utils import log_in_out

class TrackingDeliveriesUsecase:
    
    def __init__(self):
        self.test = True


    @log_in_out
    def get_data(self):
        return {"test": "test"}