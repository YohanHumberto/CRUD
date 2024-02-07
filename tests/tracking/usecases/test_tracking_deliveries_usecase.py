import pytest, sys

from unittest.mock import MagicMock

from src.tracking.usecases.tracking_deliveries_usecase import TrackingDeliveriesUsecase

@pytest.fixture(scope = "class")
def tracking_deliveries_usecase():
    return TrackingDeliveriesUsecase()

class TestTrackingDeliveriesUsecase:

    def test_create_order(self, tracking_deliveries_usecase):
        response = tracking_deliveries_usecase.get_data()

        expected = {'test': 'test'}

        assert response == expected


    def test_create_order_2(self, tracking_deliveries_usecase):
        response = tracking_deliveries_usecase.get_data()

        expected = {'test': 'test'}

        assert response == expected