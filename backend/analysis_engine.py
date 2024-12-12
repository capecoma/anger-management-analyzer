from .tension_detector import TensionDetector
from .response_detector import ResponsePatternDetector
from .therapeutic_recommender import TherapeuticRecommender

class AnalysisEngine:
    def __init__(self):
        self.tension_detector = TensionDetector()
        self.response_detector = ResponsePatternDetector()
        self.recommender = TherapeuticRecommender()
        
    def analyze_interaction(self, audio_data, speakers):
        """
        Analyzes a complete interaction session.
        """
        analysis_results = {
            'tension_analysis': {},
            'response_patterns': {},
            'recommendations': {}
        }
        
        # Analyze tension patterns
        tension_results = self.tension_detector.analyze_tension(audio_data)
        analysis_results['tension_analysis'] = tension_results
        
        # Analyze response patterns
        response_results = self.response_detector.analyze_responses(
            audio_data,
            speakers
        )
        analysis_results['response_patterns'] = response_results
        
        # Generate recommendations
        recommendations = self.recommender.generate_recommendations(
            tension_results,
            response_results
        )
        analysis_results['recommendations'] = recommendations
        
        return analysis_results
        
    def process_realtime_data(self, audio_chunk, current_speaker):
        """
        Processes real-time audio data for immediate feedback.
        """
        return {
            'current_tension': self.tension_detector.analyze_tension(audio_chunk),
            'current_patterns': self.response_detector.analyze_responses(audio_chunk, [current_speaker]),
            'immediate_recommendations': self.recommender.get_immediate_recommendations()
        }