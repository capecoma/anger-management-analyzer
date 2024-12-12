class ResponsePatternDetector:
    def __init__(self):
        self.response_types = {
            'withdrawal': {
                'silence_threshold': 2.0,  # seconds
                'volume_decrease': 0.4,
                'response_delay': 1.5,
                'weight': 0.3
            },
            'discomfort': {
                'pitch_variation': 1.3,
                'hesitation_frequency': 0.3,  # per second
                'filler_words': ['um', 'uh', 'well', 'like'],
                'weight': 0.25
            },
            'defensive': {
                'interruption_threshold': 0.8,
                'volume_increase': 1.2,
                'speech_rate_increase': 1.3,
                'weight': 0.25
            },
            'appeasement': {
                'pitch_modulation': 0.7,
                'agreement_phrases': ['yes', 'okay', 'sure', 'right'],
                'quick_response': 0.5,  # seconds
                'weight': 0.2
            }
        }