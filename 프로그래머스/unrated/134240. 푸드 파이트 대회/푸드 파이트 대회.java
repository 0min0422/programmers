class Solution {
    public String solution(int[] food) {
        StringBuilder builder = new StringBuilder();
        
        for(int i=0; i<food.length; i++) {
            
            int divNumber = food[i]/2;
             builder.append(String.valueOf(i).repeat(divNumber));
        }
        String ans = builder+"0";
        
        return ans+builder.reverse();
    }
}