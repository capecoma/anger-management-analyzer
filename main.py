from backend.tension_detector import TensionDetector
from backend.response_detector import ResponsePatternDetector
from backend.therapeutic_recommender import TherapeuticRecommender

def main():
    print('Anger Management Analyzer Starting...')
    tension_detector = TensionDetector()
    response_detector = ResponsePatternDetector()
    recommender = TherapeuticRecommender()
    
    print('System ready for analysis')

if __name__ == '__main__':
    main()