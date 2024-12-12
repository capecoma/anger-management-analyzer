class TensionDetector:
    def __init__(self):
        self.baseline_window = 30  # seconds for establishing baseline
        self.tension_thresholds = {
            'mild': 0.3,
            'moderate': 0.6,
            'high': 0.8
        }
        
        # Vocal tension indicators
        self.vocal_markers = {
            'pitch_elevation': {
                'threshold': 1.5,  # multiplier above baseline
                'weight': 0.3
            },
            'volume_increase': {
                'threshold': 1.4,
                'weight': 0.25
            },
            'speech_rate': {
                'threshold': 1.3,
                'weight': 0.2
            },
            'vocal_strain': {
                'threshold': 0.7,
                'weight': 0.25
            }
        }