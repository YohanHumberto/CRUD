import base64
import json

def format_response(success, data, message):
    code = 'success'
    key_data = 'data'
    if not success:
        code = 'fail'
        key_data = 'errors'
    return {
	    'code': code,
        'message': message,
        key_data: data
    }

def format_errors_data(message):
    return {
        'code': 'error',
        'message': message
    }

def log_in_out(func):
    def decorated_func(*args, **kwargs):
        print("Ingresando a", func.__name__)
        result = func(*args, **kwargs)
        print("Saliendo de", func.__name__)
        return result
    return decorated_func

